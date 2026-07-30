import { HttpStatusCode } from 'axios';

import type { Request, Response } from 'express';

import { blogQuerySchema, createBlogPostSchema, updateBlogPostSchema } from '../infrastructure/schemas';
import { blogRepository } from '../repositories/blog.repository';
import { ActivityAction, ActivityCategory, activityRepository } from '../repositories/activity.repository';

const adminId = (req: Request) => (req as any).user?.id ?? '';

class BlogController {
  async create(req: Request, res: Response) {
    const data = createBlogPostSchema.parse(req.body);
    const post = await blogRepository.create(data);

    await activityRepository.recordActivity({
      action: ActivityAction.NewBlogPost,
      category: ActivityCategory.Blog,
      adminId: adminId(req),
      description: `Created blog post "${post.title}"`,
    });

    return res.status(HttpStatusCode.Created).json(post);
  }

  async findAll(req: Request, res: Response) {
    const filters = blogQuerySchema.parse(req.query);
    const { data, total } = await blogRepository.findAll(req.pagination, filters);
    const { page, limit } = req.pagination;

    return res.json({
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  }

  async stats(_req: Request, res: Response) {
    const data = await blogRepository.stats();
    return res.json(data);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const post = await blogRepository.findById(id);

    if (!post) return res.status(HttpStatusCode.NotFound).json({ error: 'Blog post not found' });

    return res.json(post);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const data = updateBlogPostSchema.parse(req.body);

    const existing = await blogRepository.findById(id);
    if (!existing) return res.status(HttpStatusCode.NotFound).json({ error: 'Blog post not found' });

    const post = await blogRepository.update(id, data);

    await activityRepository.recordActivity({
      action: ActivityAction.UpdateBlogPost,
      category: ActivityCategory.Blog,
      adminId: adminId(req),
      description: `Updated blog post "${post.title}"`,
    });

    return res.json(post);
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params as { id: string };

    const existing = await blogRepository.findById(id);
    if (!existing) return res.status(HttpStatusCode.NotFound).json({ error: 'Blog post not found' });

    await blogRepository.remove(id);

    await activityRepository.recordActivity({
      action: ActivityAction.DeleteBlogPost,
      category: ActivityCategory.Blog,
      adminId: adminId(req),
      description: `Deleted blog post "${existing.title}"`,
    });

    return res.status(HttpStatusCode.NoContent).send();
  }
}

export default new BlogController();

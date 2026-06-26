import _ from 'lodash';

import authService from '../services/auth.service.tsx';
import bcrypt from 'bcryptjs';

import { HttpStatusCode } from 'axios';
import { authRepository } from '../repositories/auth.repository.ts';

import type { Request, Response } from 'express';

class AuthController {
  async login(req: Request, res: Response) {
    const admin = await authRepository.getAdminByEmail(req.body.email);
    if (!admin) return res.status(HttpStatusCode.Unauthorized).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(req.body.password, admin.password);
    if (!valid) return res.status(HttpStatusCode.Unauthorized).json({ error: 'Invalid credentials' });

    const user = _.omit(admin, ['password']);
    const response = authService.signPayload(user);

    return res.json(response);
  }
}

export default new AuthController();

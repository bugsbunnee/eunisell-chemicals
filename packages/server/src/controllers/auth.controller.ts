import _ from 'lodash';
import bcrypt from 'bcryptjs';
import authService from '../services/auth.service.tsx';

import { HttpStatusCode } from 'axios';
import { authRepository } from '../repositories/auth.repository.ts';

import type { Request, Response } from 'express';
import type { IRegister } from '../infrastructure/utils/schema.ts';

class AuthController {
  async login(req: Request, res: Response) {
    const admin = await authRepository.getAdminByEmail(req.body.email);
    if (!admin) return res.status(HttpStatusCode.Unauthorized).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(req.body.password, admin.password);
    if (!valid) return res.status(HttpStatusCode.Unauthorized).json({ error: 'Invalid credentials' });

    const user = _.omit(admin, ['password']);
    const token = authService.signPayload(user);

    authService.sendLoginAlert(admin, {
      loginTime: new Date().toUTCString(),
      location: (req.headers['x-forwarded-for'] as string | undefined) ?? req.socket.remoteAddress ?? 'Unknown',
      device: req.headers['user-agent'] ?? 'Unknown device',
    });

    return res.header('x-auth-token', token).json({ token, user });
  }

  async register(req: Request, res: Response) {
    const body = req.body as IRegister;

    const existing = await authRepository.getAdminByEmail(body.email);
    if (existing) return res.status(HttpStatusCode.Conflict).json({ error: 'An account with this email already exists' });

    const hashed = await authService.hashPassword(body.password);
    const admin = await authRepository.createAdmin({ ..._.omit(body, ['confirmPassword']), password: hashed });
    const token = authService.signPayload(admin);

    authService.sendOnboardingEmail(admin, body.password);

    return res
      .header('x-auth-token', token)
      .status(HttpStatusCode.Created)
      .json(_.omit(admin, ['password']));
  }
}

export default new AuthController();

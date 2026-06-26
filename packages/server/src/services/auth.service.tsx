import _ from 'lodash';
import jwt from 'jsonwebtoken';

class AuthService {
  decodeToken(token: string) {
    return jwt.verify(token, Bun.env.JWT_SECRET!);
  }

  signPayload(payload: object, options?: jwt.SignOptions) {
    return jwt.sign(payload, Bun.env.JWT_SECRET!, options);
  }
}

export default new AuthService();

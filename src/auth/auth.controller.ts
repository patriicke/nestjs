import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({})
export class AuthController {
  authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }
}

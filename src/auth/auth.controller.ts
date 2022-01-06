import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LoginUserDto } from '../dto/login-user.dto';
import { Public } from './public';
@Controller()
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('login')
  @Public()
  async login(@Body() loginUserDto: LoginUserDto) {
    console.log('login info', loginUserDto);
    return this._authService.validateUserByPassword(loginUserDto);
  }
}

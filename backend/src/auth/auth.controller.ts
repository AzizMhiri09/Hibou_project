import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/register.dto';
import { login_dto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/user/register')
 async register(@Body() CreateUserDto: CreateUserDto) : 
 Promise<{token : string , message : string}> {
    
    return  await this.authService.register_user(CreateUserDto);
  }

  @Post('/user/Login')
  async login(@Body() login_dto: login_dto) : Promise<{token : string , message : string}> {
    return await this.authService.login_user(login_dto);
  }

 
}

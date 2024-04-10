import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/register.dto';
import { login_dto} from './dto/login.dto';
import { user, user_model } from './schema/user.schema';
import mongoose, { Mongoose } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(user_model)
    private userModel : mongoose.Model<user>,
    private jwtService : JwtService
  ) { }
  
  async register_user(CreateUserDto: CreateUserDto) : Promise<{token : string , message : string}> {
    const {username , email  , password} = CreateUserDto

   const userInfo = await this.userModel.findOne({email})
   
   if(userInfo){
    throw new ConflictException('Email already exit')
   }else{
       const new_user = await this.userModel.create({
        username : username.trim(),
        email : email.trim(),
        password : await bcrypt.hash(password, 9)
       })

       const token = await this.jwtService.sign({
        _id : new_user.id , 
        username : new_user.username
       })
       return {token , message : 'user register success'}
   }
    
  }

  async login_user(login_dto : login_dto) : Promise<{token : string , message : string}> {
    
    const { email , password} = login_dto
    const userInfo  = await this.userModel.findOne({email}).select('+password')
    if(userInfo){
        const check_password = await bcrypt.compare(password,userInfo.password)
        if(check_password){

          const token = await this.jwtService.sign({
            _id : userInfo.id , 
        username : userInfo.username
          })
          return {token , message : 'user login success'}

        }else{
          throw new UnauthorizedException('password Incorrect')
        }
    }else {
      throw new NotFoundException('Not Found')
    }
   
  }

  
}

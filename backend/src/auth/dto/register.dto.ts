import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()  
readonly username : string 
@IsNotEmpty()
@IsEmail({}, {message : 'please provide valid email'})
readonly email : string

@IsNotEmpty()
@MinLength(6)
readonly password : string

}

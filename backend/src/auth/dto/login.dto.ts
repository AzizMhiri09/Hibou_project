import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class login_dto {

 
@IsNotEmpty()
@IsEmail({}, {message : 'please provide valid email'})
readonly email : string

@IsNotEmpty()
@MinLength(6)
readonly password : string

}
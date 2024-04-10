import { Schema , Prop , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({
    timestamps : true
})
export class user extends Document {
    @Prop({required : true})
    username : string 
    @Prop({unique : [true , 'email already exit']})
    email : string
    @Prop({required : true , select : false})
    password : string
}

export const user_schema = SchemaFactory.createForClass(user)
export const user_model = user.name
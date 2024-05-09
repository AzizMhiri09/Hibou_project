import { Schema , Prop , SchemaFactory,  } from "@nestjs/mongoose";
import mongoose ,{Document}  from "mongoose"


@Schema({
    timestamps : true
})

export class post extends Document {
    
    @Prop({type : mongoose.Schema.Types.ObjectId ,ref:'users' , requiredPaths:true })
    
    user_id :  mongoose.Schema.Types.ObjectId
    //@Prop({required: true})
    MonitoringName : string
    // @Prop({required: true})
    // date : string
    // @Prop({required: true})
    // size : string 
    // @Prop({required: true})
    // @Prop({required: true})
    // time : string
    // @Prop({required: true})
    // BrowserName : string
    // @Prop({required: true})
    // type :string

       
}
export const post_schema = SchemaFactory.createForClass(post)
export const post_model= post.name
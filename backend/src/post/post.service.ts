import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { post, post_model } from './schema/post.schema';
import mongoose  from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import multer from 'multer';
;





@Injectable()
export class PostService {
  constructor(
    @InjectModel(post_model)
    private postModel: mongoose.Model<post>, 
    private readonly  ConfigService : ConfigService
  ){}
  
   async create(createPostDto: CreatePostDto, userInfo): Promise <{post : post , message:string }> {
     
   
    
    const {MonitoringName } = createPostDto
   
   
    const new_post = await this.postModel.create({
    user_id : userInfo._id,
    MonitoringName,
   }) 
   return{
    post :new_post,
    message : 'Created'
   }
   
  }

  async find_post_by_user(userInfo): Promise <{posts : post[] , message:string }> {
    
    const posts = await this.postModel.find({ user_id : new mongoose.mongo.ObjectId( userInfo._id) })
    
    return {
      posts : posts,
      message : "Success"
    }
    
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

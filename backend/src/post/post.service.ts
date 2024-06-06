import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { post, post_model } from './schema/post.schema';
import mongoose  from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import multer from 'multer';
import { Console } from 'console';
import { ObjectId } from 'mongodb';
 





@Injectable()
export class PostService {
  constructor(
    @InjectModel(post_model)
    private postModel: mongoose.Model<post>, 
    private readonly   ConfigService : ConfigService
  ){}
  
   async create(createPostDto: CreatePostDto, userInfo, files: Express.Multer.File): Promise <{post : post , message:string }> {
     
    const fileData = {
      originalname: files.originalname,
      filename: files.filename,
      path: files.path,
    };

    
    const {MonitoringName , date , size ,  time,  BrowserName , type  } = createPostDto;
    
    
    
   
   
    const new_post = await this.postModel.create({
    user_id : userInfo._id,
    MonitoringName,
    date , 
    size , 
    time , 
    BrowserName ,
    type ,
    files : fileData
    
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

  async delete_post_by_user(postId : string)  : Promise <{post : post , message:string }> {
    
    try {
      // Ensure the postId is a valid ObjectId
      if (!ObjectId.isValid(postId)) {
        return {
          post: null,
          message: "Invalid post ID"
        };
      }

      // Find and delete the post by its ID
      const post = await this.postModel.findByIdAndDelete(postId);

      if (!post) {
        return {
          post: null,
          message: "No post found with this ID"
        };
      }

      return {
        post: post,
        message: "Post deleted successfully"
      };
    } catch (error) {
      // Handle potential errors
      throw new Error("An error occurred while deleting the post: " + error.message);
    }
  }
}


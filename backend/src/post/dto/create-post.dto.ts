import { IsEmpty, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';
import { FileSystemStoredFile, IsFile } from 'nestjs-form-data';
import { FileInterceptor } from '@nestjs/platform-express';
import {ApiProperty } from '@nestjs/swagger'
import { Express } from 'express'
import { UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileUpload } from './file-upload.interface';



export class CreatePostDto {
     @IsEmpty({message : 'you cannot pass user id '})
     readonly user_id : mongoose.Schema.Types.ObjectId

    // @IsNotEmpty()
    readonly MonitoringName : string

    // @IsNotEmpty()
    // readonly date : string

    // @IsNotEmpty()
    
    // readonly size : string 
    // @IsNotEmpty()
    // @IsNotEmpty()
    // readonly time : string
    // @IsNotEmpty()
    // readonly BrowserName : string
    // @IsNotEmpty()
    // readonly type :string
   
    // @IsNotEmpty()
    // @IsFile()
    // scriptName : string

}

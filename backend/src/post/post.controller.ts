import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { FileSystemStoredFile, FormDataRequest } from 'nestjs-form-data';
import { AuthGuard } from '@nestjs/passport';
import { post } from './schema/post.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';



@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Post('/Create')
  @UseGuards(AuthGuard())
  // @UseInterceptors(FileInterceptor('files'))
  async create(@Body() createPostDto: CreatePostDto , @Req() req   ): Promise<{post:post 
    , message:string}> {
      console.log(createPostDto)
      return this.postService.create(createPostDto, req.user ) ; 
  }

  @Get('/Post')
  @UseGuards(AuthGuard())
   async get_post_by_user(@Req() req): Promise <{posts : post[] , message:string }> {
    return this.postService.find_post_by_user( req.user );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}

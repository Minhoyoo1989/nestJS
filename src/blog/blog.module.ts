/* eslint-disable prettier/prettier */
// /blog-backend/src/blog/blog.module.ts

import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { BlogSchema } from './schemas/blog.schema'; // and this

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }]),
  ], // add 
  providers: [BlogService],
  controllers: [BlogController]
})
export class BlogModule { }
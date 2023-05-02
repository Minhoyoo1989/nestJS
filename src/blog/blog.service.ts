/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interface/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = new this.postModel(createPostDTO);// 인스턴스 생성이 아니면 await쓰면 에러표시 뜸 이유는 모름....
    return newPost.save();
  }

  async getPost(postID): Promise<Post> {
    const post = await this.postModel
      .findById(postID)
      .exec();
    return post;
  }

  async getPosts(): Promise<Post[]> {
    const posts = await this.postModel.find().exec();
    return posts;
  }

  async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    const editPost = await this.postModel
      .findByIdAndUpdate(postID, createPostDTO, { new: true });
    return editPost;
  }

  async deletePost(postID): Promise<any> {
    const deletePost = await this.postModel
      .findByIdAndRemove(postID);
    return deletePost;
  }
}

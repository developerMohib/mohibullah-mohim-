import { Document } from 'mongoose';

export interface Author {
  name: string;
  role: string;
  image: string;
}

export interface BlogPost extends Document {
  title: string;
  description: string;
  details: string;
  author: Author;
  image: string;
  link: string;
  createdAt?: Date;
  updatedAt?: Date;
}

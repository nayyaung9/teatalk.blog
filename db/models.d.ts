import { Document, ObjectId } from 'mongoose'

interface IUser extends Document {
  email: string
  username: string
  password: string
}

interface IStory extends Document {
  title: String 
  content: String 
  userId: ObjectId
}

export const {
  IUser,
  IStory
};

import mongoose, { Schema } from 'mongoose'
import { IUser, IStory } from './models.d'

mongoose.Promise = global.Promise

const db = mongoose.createConnection('mongodb://localhost:27017/teatalk')

const UserSchema: Schema = new Schema(
  {
    username: String,
    email: String,
    password: String
  },
  {
    timestamps: true
  }
)

const StorySchema: Schema = new Schema(
  {
    title: String,
    content: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    uniqueId: String
  },
  {
    timestamps: true
  }
)

const User = db.model<IUser>('User', UserSchema)
const Story = db.model<IStory>('Story', StorySchema)

const Models = {
  User,
  Story
}

module.exports = Models

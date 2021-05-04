import mongoose, { Schema, Document } from 'mongoose'

mongoose.Promise = global.Promise

const db = mongoose.createConnection('mongodb://localhost:27017/teatalk')

interface IUser extends Document {
  email: string
  username: string
  password: string
}

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

const User = db.model<IUser>('User', UserSchema)

export default User

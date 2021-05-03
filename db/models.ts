import mongoose, { Schema, Document } from 'mongoose'

mongoose.Promise = global.Promise

const db = mongoose.createConnection('mongodb://localhost:27017/teatalk')

interface IUser extends Document {
  email: string
  firstName: string
  lastName: string
}

const UserSchema: Schema = new Schema({
  _id: { type: Number, index: true },
  firstName: String,
  lastName: String,
  email: String,
})

const User = db.model<IUser>('User', UserSchema)

export default User;
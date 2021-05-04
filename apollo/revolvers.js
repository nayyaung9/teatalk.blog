import User from '../db/models'
import { AuthenticationError, UserInputError } from 'apollo-server-micro'
import { createUser, validatePassword } from '../lib/users'

export const resolvers = {
  Query: {
    users() {
      return User.find().then(res => {
        return res
      })
    }
  },
  Mutation: {
    async signUp(_parent, args, _context, _info) {
      const findUserExist = await User.findOne({ email: args.input.email })

      if (findUserExist)
        throw new UserInputError('email is already in use, try to login')

      const user = await createUser(args.input)
      return { user }
    },
    async signIn(_, args, _context, _info) {
      const user = await User.findOne({ email: args.input.email })

      if (user && (await validatePassword(user, args.input.password))) {
        Router.push('/home')

        return { user }
      }

      throw new UserInputError('Invalid email and password combination')
    }
  }
}

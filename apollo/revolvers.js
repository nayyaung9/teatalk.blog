const Models = require('../db/models')
import { AuthenticationError, UserInputError } from 'apollo-server-micro'
import { createUser, validatePassword, findUser } from '../lib/users'
import { createStory, storyById, storyByPin } from '../lib/story'
import { setLoginSession, getLoginSession } from '../lib/auth'

export const resolvers = {
  Query: {
    async viewer(_parent, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req)

        if (session) {
          return findUser({ email: session.email })
        }
      } catch (error) {
        throw new AuthenticationError(
          'Authentication token is invalid, please log in'
        )
      }
    },
    users() {
      return Models.User.find().then(res => {
        return res
      })
    },
    stories() {
      return Models.Story.find().populate('userId')
    },
    async storyById(_parent, args, _context, _info) {
      try {
        return await storyById({ id: args.uniqueId[0] })
      } catch (error) {
        throw new Error('There was an error while processing your request.')
      }
    },
    async storyByPin(_, args, _ctx, _info) {
      try {
        if (args.sort) {
          console.log(args.sort)
          return await storyByPin()
        }
      } catch (error) {
        console.log('error', error);
        throw new Error(
          'There was an error while processing your request.',
          error
        )
      }
    }
  },
  Mutation: {
    async signUp(_parent, args, _context, _info) {
      const findUserExist = await Models.User.findOne({
        email: args.input.email
      })

      if (findUserExist)
        throw new UserInputError('email is already in use, try to login')

      const user = await createUser(args.input)
      return { user }
    },
    async signIn(_, args, _context, _info) {
      const user = await Models.User.findOne({ email: args.input.email })

      if (user && (await validatePassword(user, args.input.password))) {
        const session = {
          _id: user._id,
          email: user.email,
          username: user.username
        }

        await setLoginSession(_context.res, session)

        return { user }
      }

      throw new UserInputError('Invalid email and password combination')
    },
    async createStory(_, args, _ctx, _info) {
      try {
        const newStory = await createStory(args.input)

        return { newStory }
      } catch (err) {}
    }
  }
}

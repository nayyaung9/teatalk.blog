import User from '../db/models'

export const resolvers = {
  Query: {
    users() {
      return User.find().then(res => {
        console.log('res', res);
        return res;
      })
    }
  }
}

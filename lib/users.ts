import bcrypt from 'bcrypt'
const Models = require('../db/models')
import Router from 'next/router'

export async function createUser({ username, email, password }) {
  const cryptoPassword = await bcrypt.hashSync(password, 10)

  const newUser = new Models.User({
    username,
    email,
    password: cryptoPassword
  })

  await newUser.save()

  // Router.push('/home')

  return newUser
}

export async function findUser({ email }) {
  const user = await Models.User.findOne({ email })
  return user
}

export async function validatePassword(user, inputPassword) {
  const passwordsMatch = await bcrypt.compareSync(inputPassword, user.password)
  return passwordsMatch
}

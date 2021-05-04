import bcrypt from 'bcrypt'
import User from '../db/models'
import Cookies from 'js-cookie'
import Router from 'next/router'

export async function createUser({ username, email, password }) {
  const cryptoPassword = await bcrypt.hashSync(password, 10)

  const newUser = new User({
    username,
    email,
    password: cryptoPassword
  })

  await newUser.save()

  // Cookies.set('auth', true, { expires: 365 })
  Router.push('/home')

  return newUser
}

export async function validatePassword(user, inputPassword) {
  const passwordsMatch = await bcrypt.compareSync(inputPassword, user.password)
  return passwordsMatch
}

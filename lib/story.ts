const Models = require('../db/models');
import Cookies from 'js-cookie'
import Router from 'next/router'

export async function createStory({ title, content }) {
  try {
    let newStory = new Models.Story({
      title,
      content
    })

    await newStory.save()

    return newStory
  } catch (err) {
    console.log('err')
  }
}

const Models = require('../db/models');
import Router from 'next/router'

export async function createStory({ userId, title, content }) {
  try {
    let newStory = new Models.Story({
      userId,
      title,
      content
    })

    await newStory.save()

    return newStory
  } catch (err) {
    console.log('err')
  }
}

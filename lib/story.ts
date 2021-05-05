const Models = require('../db/models')
const shortId = require('shortid')

export async function createStory({ userId, title, content }) {
  try {
    let newStory = new Models.Story({
      userId,
      title,
      content,
      uniqueId: await shortId.generate()
    })

    await newStory.save()

    return newStory
  } catch (err) {
    console.log('err')
  }
}

export async function storyById({ id }) {
  console.log('uniqueId', id);
  return await Models.Story.findOne({ uniqueId: id }).populate('_user')
}

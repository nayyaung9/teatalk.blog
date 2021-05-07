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

    // await newStory.save()

    let newPost

    await newStory.save(function (err, storyAuthor) {
      storyAuthor.populate('userId', function (err, author) {
        return newPost = author
      })
    })

    console.log('newPost', newPost)

    return newPost
  } catch (err) {
    console.log('err', err)
  }
}

export async function storyById({ id }) {
  return await Models.Story.findOne({ uniqueId: id }).populate('userId').exec()
}

export async function storyByPin() {
  return await Models.Story.find({ isPin: true })
    .sort({ createdAt: -1 })
    .limit(3)
    .populate('userId')
    .exec()
}

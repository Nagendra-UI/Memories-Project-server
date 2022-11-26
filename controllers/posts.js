import PostMessage from '../models/postMesg.js';

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const creatPosts = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json({ message: "saved data", data: newPost })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
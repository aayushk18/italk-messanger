import cloudinary from "../lib/cloudinary.js"
import Message from "../models/message.models.js"
import User from "../models/user.models.js"

export const getuserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")
    } catch (error) {
        console.log("error in getuserForSidebar", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id

        const message = await Message.find({
            $or: [
                { senderId: senderId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: senderId }

            ]
        })
        res.status(200).json(message)
    } catch (error) {

        console.log("Error in getMessages controllers", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const sendMessages = async (req, res) => {
    try {
        const { text, image } = req.body;
        const { id: receiverId } = req.params;
const senderId= req.user._id;

        let imageUrl;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url
        }

        const newMessages = new Message({
            senderId,
            receiverId, text,
            image: imageUrl,
        })

        await newMessages.save()



        
        res.status(201).json(newMessages)
    } catch (error) {
        console.log("Error in sendMessages controllers", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}
import { ObjectId } from "mongodb"
import DB from "../client"
import Media from "./medias"
import Social from "./socials"
import mongoose from "mongoose"

const schema = new mongoose.Schema({
    id: ObjectId,
    name: String,
    createdAt: Date,
    email: String,
    emailVerified: Date,
    password_hash: String,
    salt: String,
    socials: [Social],
    medias: [Media]
})

export default mongoose.models.users || mongoose.model('users', schema)
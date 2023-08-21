import mongoose from "mongoose"
import DB from "../client"

const schema = new mongoose.Schema({
    name: String,
    accessId: String,
    refreshToken: String,
    refreshedAt: Date,
    followerCount: Number,
    followingCount: Number
})

export default mongoose.models.socials || mongoose.model('socials', schema)
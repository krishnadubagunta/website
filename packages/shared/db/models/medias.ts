import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: String,
    description: String,
    shortTitle: String,
    publishedAt: Date,
    imageUrl: String,
    tags: [String],
})

export default mongoose.models.medias || mongoose.model('medias', schema)
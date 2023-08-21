import mongoose, { Mongoose } from 'mongoose'

export default class DB {
    private static connectionUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ekg0s9n.mongodb.net/?retryWrites=true&w=majority`;
    static _instance: Mongoose

    static async client(): Promise<Mongoose> {
        if (!DB._instance) {
          DB._instance = await mongoose.connect(DB.connectionUri, {
            dbName: 'krishnadubagunta',
            autoCreate: false,
            autoIndex: true,
            maxPoolSize: 5,
            appName: 'Karma'
          })
        }
        return DB._instance
    }

}

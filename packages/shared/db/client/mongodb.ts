import { MongoClient, ServerApiVersion } from "mongodb";

export default class MongoDBClient {
    private static connectionUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ekg0s9n.mongodb.net/?retryWrites=true&w=majority`;
    private static _instance: Promise<MongoClient>

    static get client(): Promise<MongoClient> {
        if (!MongoDBClient._instance) {
            MongoDBClient._instance = new MongoClient(MongoDBClient.connectionUri, {
                serverApi: {
                  version: ServerApiVersion.v1,
                  strict: true,
                  deprecationErrors: true,
                }
              }).connect()
        }
        return MongoDBClient._instance
    }

}

import NextAuth from "next-auth/next";
import { nextAuthOptions } from 'next-auth-config'
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import MongoDBClient from 'db/client/mongodb'
import { Adapter } from "next-auth/adapters";

export const runtime = 'nodejs'

const handler = NextAuth({
    adapter: MongoDBAdapter(MongoDBClient.client, {
        databaseName: 'krishnadubagunta',
        collections: {
            Accounts: 'accounts',
            Sessions: 'sessions',
            Users: 'users',
            VerificationTokens: 'verification_tokens'
        }
    }) as Adapter,
    ...nextAuthOptions,
});

export { handler as GET, handler as POST }
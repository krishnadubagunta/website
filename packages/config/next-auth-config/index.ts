import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import PinterestProvider from 'next-auth/providers/pinterest'
import { randomUUID, randomBytes } from 'crypto'

export const nextAuthOptions: NextAuthOptions  = {
    secret: process.env.NEXT_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
        generateSessionToken: () => {
            return randomUUID?.() ?? randomBytes(32).toString("hex")
        }
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        // FacebookProvider({
        //     clientId: '',
        //     clientSecret: ''
        // }),
        // TwitterProvider({
        //     clientId: '',
        //     clientSecret: ''
        // }),
        PinterestProvider({
            clientId: process.env.PINTEREST_CLIENT_ID as string,
            clientSecret: process.env.PINTEREST_SECRET as string
        })
    ]
}
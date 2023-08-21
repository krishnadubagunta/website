"use client"
import { nextAuthOptions } from "next-auth-config";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useUser() {
    const [user, setUser] = useState<any>()
    const {data: session} = useSession({
        required: true
    })
    useEffect(() => {
        if (session?.user) {
            setUser(session.user)
        }
        return () => {}
    }, [session?.user])
    return [user]
}
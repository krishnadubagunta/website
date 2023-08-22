"use client";
import H4 from "kd-ui/ui/typography/h4";
import { LogIn } from "lucide-react";
import { Button } from "kd-ui/ui/button";
import { signIn } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "kd-ui/ui/card";

export default function Login() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <Card className="w-96 h-96 flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() =>
              signIn("google", {
                callbackUrl: `${window.location.origin}/medias`,
              })
            }
          >
            <LogIn />&nbsp;Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

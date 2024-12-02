import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./card";
import Small from "./typography/small";
import { ReactChildren } from "./types";

export default function SocialLink({ href, children }: ReactChildren & { href: string }) {
  return <Link href={href} target="_blank">
  <Card className="w-fit flex items-center m-2">
    <CardContent className="p-2 flex items-center">
      <div className="flex justify-center items-center h-10 w-10 p-2 ">
        { children }
      </div>
      {/* <Small className=" px-2">{username}</Small>
      <div className="p-1 h-5 w-5 flex justify-center items-center ">
        <ExternalLink />
      </div> */}
    </CardContent>
  </Card>
</Link>;
}

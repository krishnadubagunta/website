import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "./card";
import Small from "./typography/small";
import { ReactChildren } from "./types";

export default function SocialLink({ href, children, username }: ReactChildren & { href: string, username: string}) {
  return <Link href={href} target="_blank">
  <Card className="w-fit dark:border-neutral-400 border-neutral-600 text-black dark:text-white flex items-center m-2">
    <CardContent className="p-2 flex items-center">
      <div className="flex justify-center items-center rounded-full h-10 w-10 border border-black dark:border-neutral-400 p-2 dark:text-neutral-400">
        { children }
      </div>
      <Small className="dark:text-neutral-300 px-2">{username}</Small>
      <div className="p-1 h-5 w-5 flex justify-center items-center text-neutral-400">
        <ExternalLink />
      </div>
    </CardContent>
  </Card>
</Link>;
}

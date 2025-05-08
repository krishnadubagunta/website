import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
    title: "Resume",
    description: "Resume of Saikrishna Dubagunta",
    openGraph: {
        title: 'Resume',
        description: 'Resume of Saikrishna Dubagunta',
        url: 'https://www.krishnadubagunta.com/resume',
        type: 'profile',
        gender: 'male',
        images: [
          {
            url: "https://krishnadubagunta.com/images/me.jpg",
            alt: 'Me near DUMBO in brooklyn just after snow',
            type: 'image/jpg'
          }
        ],
        firstName: 'Sai Krishna',
        lastName: 'Dubagunta',
        emails: ['dubagunta.saikrishna@outlook.com'],
      },
    appleWebApp: {
        title: 'Resume',
        statusBarStyle: 'black-translucent',
        startupImage: {
            url: "https://krishnadubagunta.com/images/me.jpg",
            media: 'image/jpg',
        }
    },
}

export default function Resume() {
  return (<>
    <main className="pt-6 flex flex-col items-center gap-4">
        <article className="prose prose-sm dark:prose-invert w-full max-w-2xl">
            <Content />
        </article>
    </main>
  </>
  );
}

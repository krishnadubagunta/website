import { Metadata } from "next";
import { Download } from "lucide-react";
import Content from "./content.mdx";

export const metadata: Metadata = {
    title: "Sai Krishna Dubagunta's Resume",
    description: "Full-stack software engineer and principal consultant architect with 9+ years of experience designing and delivering scalable, high-performance systems across cloud, microservices, and AI-integrated platforms. Proven across the full stack in Golang, Rust, Zig, TypeScript, and Ruby, with deep expertise in API design, system optimization, and engineering leadership.",
    openGraph: {
        title: "Sai Krishna Dubagunta's Resume",
        description: 'Full-stack software engineer and principal consultant architect with 9+ years of experience designing and delivering scalable, high-performance systems across cloud, microservices, and AI-integrated platforms. Proven across the full stack in Golang, Rust, Zig, TypeScript, and Ruby, with deep expertise in API design, system optimization, and engineering leadership.',
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
        title: "Sai Krishna Dubagunta's Resume",
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
        <article className="relative w-full max-w-2xl pb-16">
            <a
                href="/resume.pdf"
                download
                aria-label="Download résumé as PDF"
                title="Download résumé as PDF"
                className="absolute right-0 top-1 text-muted-foreground transition-colors hover:text-foreground"
            >
                <Download className="h-5 w-5" />
            </a>
            <Content />
        </article>
    </main>
  </>
  );
}

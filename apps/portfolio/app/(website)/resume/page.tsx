import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
    title: "Sai Krishna Dubagunta's Resume",
    description: "Full-stack software engineer and principal consultant architect with 9+ years of experience designing and delivering scalable, high-performance systems across cloud, microservices, and AI-integrated platforms. Proven across the full stack in Golang, Rust, Zig, TypeScript, and Ruby, with deep expertise in API design, system optimization, and engineering leadership.",
    openGraph: {
        title: "Sai Krishna Dubagunta's Resume",
        description: 'Results-driven Principal Consultant Architect with over 8 years of extensive experience designing and delivering high-performance, scalable full-stack solutions. Expert in frontend technologies (ReactJS, NextJS, Angular) and backend development (Java, Golang, Ruby, Python, Node.js). Proven success in API design, microservices architecture, performance optimization, and team leadership. Passionate about mentoring engineering teams and driving business outcomes through technology innovation.',
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
        <article className="w-full max-w-2xl pb-16">
            <Content />
        </article>
    </main>
  </>
  );
}

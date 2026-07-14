import { Github, Instagram, Linkedin, LucideShoppingCart } from "lucide-react";
import SocialLink from "kd-ui/ui/social";
import TypographyP from "kd-ui/ui/typography/p";

export default function BioSocials() {
  return (
    <section className="container max-w-2xl flex flex-col items-center gap-6 py-16 text-center">
      <TypographyP serif className="text-foreground/80">
        A passionate software developer and avid landscape photographer — finding
        harmony between two seemingly different worlds.
      </TypographyP>
      <div className="flex flex-wrap justify-center items-stretch">
        <SocialLink href="https://github.com/krishnadubagunta">
          <Github className="fill-current stroke-none" />
        </SocialLink>
        <SocialLink href="https://instagram.com/kridsphotography">
          <Instagram />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/saikrishnadubaguntah">
          <Linkedin className="fill-current stroke-none" />
        </SocialLink>
        <SocialLink href="https://kridworks.etsy.com">
          <LucideShoppingCart />
        </SocialLink>
      </div>
    </section>
  );
}

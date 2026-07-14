import TypographyH4 from "kd-ui/ui/typography/h4";
import TypographyP from "kd-ui/ui/typography/p";

export default function TopicCards() {
  return (
    <section className="container max-w-4xl py-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <TypographyH4>Software development: where passion meets expertise</TypographyH4>
          <TypographyP serif className="text-foreground/80">
            I&apos;ve honed my skills as a software developer, channeling my love for
            problem-solving and innovation into creating practical and elegant
            solutions. With each project I undertake, I strive to create software that
            meets functional requirements while reflecting real craftsmanship.
          </TypographyP>
        </div>
        <div className="flex flex-col gap-3">
          <TypographyH4>Fueling inspiration through photography</TypographyH4>
          <TypographyP serif className="text-foreground/80">
            Beyond the realm of coding, my adventurous spirit finds solace in
            landscape photography — traversing breathtaking vistas and capturing
            nature&apos;s wonders. The funds from my software development work power
            these photographic expeditions, creating a cycle where my creative
            pursuits fuel each other.
          </TypographyP>
        </div>
      </div>
    </section>
  );
}

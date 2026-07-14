import Image from "next/image";
import clsx from "clsx";
import { kaiseiFont } from "kd-ui/styles/kaiseiFont";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] sm:min-h-[85vh] w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/me.jpg"
        alt="Krishna Dubagunta standing before the DUMBO bridge in Brooklyn"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
        <h1
          className={clsx(
            kaiseiFont.className,
            "text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          )}
        >
          Krishna Dubagunta
        </h1>
        <p className="text-lg font-medium text-foreground sm:text-xl">
          Software developer. Landscape photographer.
        </p>
        <p className="font-serif text-base text-muted-foreground sm:text-lg">
          Two crafts, one obsession with getting the details right.
        </p>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted-foreground/70 sm:flex">
        <span>scroll</span>
        <span aria-hidden>↓</span>
      </div>
    </section>
  );
}

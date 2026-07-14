import Skeleton from "kd-ui/ui/skeleton";
import H3 from "kd-ui/ui/typography/h3";

const HEIGHTS = ["h-64", "h-48", "h-72", "h-56", "h-80", "h-60"];

export default function Loading() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <H3 kaisei>gallery&nbsp;&nbsp;&nbsp;📸</H3>
      <div className="columns-2 gap-4 pt-10 sm:gap-6 md:columns-3">
        {HEIGHTS.map((h, i) => (
          <Skeleton key={i} className={`mb-4 w-full break-inside-avoid rounded-lg sm:mb-6 ${h}`} />
        ))}
      </div>
    </div>
  );
}

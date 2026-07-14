import Skeleton from "kd-ui/ui/skeleton";
import H3 from "kd-ui/ui/typography/h3";

export default function Loading() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <H3 kaisei>gallery&nbsp;&nbsp;&nbsp;📸</H3>
      <div className="grid grid-cols-2 pt-10 md:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="aspect-square w-full rounded-none" />
        ))}
      </div>
    </div>
  );
}

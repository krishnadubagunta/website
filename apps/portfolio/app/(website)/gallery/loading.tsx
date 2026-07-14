import Skeleton from "kd-ui/ui/skeleton";
import H3 from "kd-ui/ui/typography/h3";

export default function Loading() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <H3 kaisei>gallery&nbsp;&nbsp;&nbsp;📸</H3>
      <div className="pt-6 flex space-x-4">
        <Skeleton className="h-10 w-16" />
        <Skeleton className="h-10 w-16" />
        <Skeleton className="h-10 w-16" />
      </div>
      <div className="flex flex-col gap-16 pt-10 sm:gap-24">
        {[0, 1, 2].map((i) => (
          <div key={i} className="-mx-4 sm:-mx-12 lg:-mx-20">
            <Skeleton className="h-[60vh] w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

import Skeleton from "kd-ui/ui/skeleton";
import H3 from "kd-ui/ui/typography/h3";

export default function Loading() {
  return (<div className="container max-w-4xl py-6 lg:py-10">
    <H3 kaisei>gallery&nbsp;&nbsp;&nbsp;📸</H3>
  <div className="pt-6 flex space-x-4">
    <Skeleton className="h-10 w-16" />
    <Skeleton className="h-10 w-16" />
    <Skeleton className="h-10 w-16" />
  </div>
  <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-self-center sm:place-self-start">
    <Skeleton className="h-64 w-64" />
    <Skeleton className="h-64 w-64" />
    <Skeleton className="h-64 w-64" />
    <Skeleton className="h-64 w-64" />
    <Skeleton className="h-64 w-64" />
    <Skeleton className="h-64 w-64" />
    <Skeleton className="h-64 w-64" />
  </div>
</div>);
}

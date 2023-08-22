import Skeleton from "kd-ui/ui/skeleton";
import H3 from "kd-ui/ui/typography/h3";

export default function Loading() {
  return (
    <div className="pt-6 flex flex-col place-self-center w-10/12">
      <H3>gallery&nbsp;&nbsp;&nbsp;📸</H3>
      <div className="pt-6 flex space-x-5 w-full flex-wrap">
        <Skeleton className="h-64 w-64" />
        <Skeleton className="h-64 w-64" />
        <Skeleton className="h-64 w-64" />
        <Skeleton className="h-64 w-64" />
      </div>
    </div>
  );
}

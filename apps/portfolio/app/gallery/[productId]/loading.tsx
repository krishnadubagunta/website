import Skeleton from "kd-ui/ui/skeleton";

export default function Loading() {
  return (<div className="pt-6 inline-flex justify-center w-full">
      <div className="flex flex-col space-y-4">
        <Skeleton className="h-[650px] w-[650px]" />
        <div className="flex justify-between">
        <Skeleton className="h-4 w-96" />
        <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-4 w-60" />
      </div>
    </div>
  );
}

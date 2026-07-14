import Skeleton from "kd-ui/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="container max-w-4xl">
        <Skeleton className="h-3 w-20" />
      </div>
      <Skeleton className="mt-6 h-[70vh] w-full max-w-3xl" />
      <div className="container flex max-w-2xl flex-col items-center gap-4 pt-8">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-10 w-40" />
      </div>
    </div>
  );
}

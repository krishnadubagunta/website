import Skeleton from 'kd-ui/ui/skeleton'

export default function Loading() {
  return (
    <div className="flex flex-col">
      <div className="relative flex min-h-[70vh] sm:min-h-[85vh] w-full animate-pulse items-center justify-center overflow-hidden bg-muted">
        <div className="flex flex-col items-center gap-4 px-4">
          <Skeleton className="h-10 w-64 sm:h-14 sm:w-96" />
          <Skeleton className="h-5 w-56 sm:w-72" />
          <Skeleton className="h-4 w-48 sm:w-64" />
        </div>
      </div>

      <div className="container flex max-w-2xl flex-col items-center gap-6 py-16">
        <Skeleton className="h-4 w-full max-w-lg" />
        <div className="flex gap-2">
          <Skeleton className="h-14 w-14 rounded-lg" />
          <Skeleton className="h-14 w-14 rounded-lg" />
          <Skeleton className="h-14 w-14 rounded-lg" />
          <Skeleton className="h-14 w-14 rounded-lg" />
        </div>
      </div>

      <div className="container max-w-4xl py-10">
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-10">
        <Skeleton className="mb-8 h-6 w-48" />
        <div className="grid gap-x-12 gap-y-14 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-3">
              <Skeleton className="aspect-[1.91/1] w-full rounded-lg" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

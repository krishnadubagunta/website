import Skeleton from 'kd-ui/ui/skeleton'

export default function Loading() {
  return (
    <main className="pt-6 flex flex-col items-center gap-4">
      <article className="w-full max-w-2xl space-y-4">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </article>
    </main>
  );
}

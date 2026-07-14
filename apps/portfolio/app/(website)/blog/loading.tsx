import Skeleton from 'kd-ui/ui/skeleton'
import TypographyH3 from 'kd-ui/ui/typography/h3'

export default function Loading() {
  return (
    <div className="container max-w-3xl py-6 lg:py-10">
      <div className="border-b border-border pb-8">
        <TypographyH3 kaisei>read my blog</TypographyH3>
        <Skeleton className="mt-3 h-4 w-64" />
      </div>
      <div className="pt-10">
        <Skeleton className="aspect-[2/1] w-full rounded-lg" />
        <div className="flex flex-col gap-3 pt-6">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="flex flex-col">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex gap-6 border-b border-border py-8">
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-32" />
            </div>
            <Skeleton className="hidden h-32 w-32 shrink-0 rounded-lg sm:block" />
          </div>
        ))}
      </div>
    </div>
  );
}

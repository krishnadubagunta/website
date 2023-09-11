import Skeleton from 'kd-ui/ui/skeleton'
import TypographyH3 from 'kd-ui/ui/typography/h3';

export default function Loading() {
    return (<section className="flex flex-col md:flex-row">
    <div className="md:flex-col md:w-2/12 hidden md:flex pt-6 sm:pr-2 lg:pr-4">
      <TypographyH3 className="pb-1">ready my blog</TypographyH3>
      <aside>
        <div className="flex flex-col space-y-4">
          <div className={"flex flex-col space-y-2"}>
            <Skeleton className={"h-3 w-40"} />
            <Skeleton className="h-3 w-28" />
          </div>
          <div className={"flex flex-col space-y-2"}>
            <Skeleton className={"h-3 w-40"} />
            <Skeleton className="h-3 w-28" />
          </div>
          <div className={"flex flex-col space-y-2"}>
            <Skeleton className={"h-3 w-40"} />
            <Skeleton className="h-3 w-28" />
          </div>
        </div>
      </aside>
    </div>
  </section>);
  }
  
import Skeleton from 'kd-ui/ui/skeleton'
import P from 'kd-ui/ui/typography/p';

export default function Loading() {
    return (<section className="flex flex-col md:flex-row">
    <div className="md:flex-col md:w-2/12 hidden md:flex pt-6 sm:pr-2 lg:pr-4">
      <P className="pb-1">more articles</P>
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
    <article className="p-4 flex flex-col rounded-sm w-full">
        <div className='max-w-prose place-self-center'>
        {
            [1,2,3,4,5,6,7,8,9,10].map((_, i) => <div key={i} className='space-y-2'>
              <Skeleton className={"h-3 w-96"} />
              <Skeleton className="h-3 w-96" />
            </div>)
           }
        </div>
      </article>
  </section>);
  }
  
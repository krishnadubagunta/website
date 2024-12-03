import Skeleton from 'kd-ui/ui/skeleton'
import TypographyH3 from 'kd-ui/ui/typography/h3';

export default function Loading() {
    return (<article className='container max-w-4xl py-6 lg:py-10'>
      <TypographyH3 kaisei className="pb-6">read my blog</TypographyH3>
    <div className="grid gap-12 gap-y-16 sm:grid-cols-2">
      <Skeleton className='h-[376px] w-[376px]' />
      <Skeleton className='h-[376px] w-[376px]' />
      <Skeleton className='h-[376px] w-[376px]' />
      <Skeleton className='h-[376px] w-[376px]' />
    </div>
  </article>);
  }

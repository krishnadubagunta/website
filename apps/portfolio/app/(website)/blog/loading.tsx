import Skeleton from 'kd-ui/ui/skeleton'
import TypographyH3 from 'kd-ui/ui/typography/h3';

export default function Loading() {
    return (<article className='pt-6 flex flex-col'>
    <TypographyH3 kaisei>read my blog</TypographyH3>
    <Skeleton className='h-[150px] w-full' />
    <Skeleton className='h-[150px] w-full' />
    <Skeleton className='h-[150px] w-full' />
    <Skeleton className='h-[150px] w-full' />
  </article>);
  }

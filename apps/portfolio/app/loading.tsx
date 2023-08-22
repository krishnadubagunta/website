import Skeleton from 'kd-ui/ui/skeleton'
import TypographyH3 from 'kd-ui/ui/typography/h3';

export default function Loading() {
    return (<article className='pt-6 flex flex-col space-y-4 w-10/12'>
    <TypographyH3>hello, i'm krishna dubagunta 👋🏼</TypographyH3>
    <Skeleton className='h-screen w-full' />
  </article>);
  }
  
import Skeleton from 'kd-ui/ui/skeleton'
import TypographyH3 from 'kd-ui/ui/typography/h3';

export default function Loading() {
    return (<article className='pt-6 flex flex-col mb-3'>
    <TypographyH3 kaisei>hello, i&apos;m krishna dubagunta 👋🏼</TypographyH3>
    <Skeleton className='h-screen w-full' />
  </article>);
  }

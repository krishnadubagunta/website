import Skeleton from 'kd-ui/ui/skeleton'
import TypographyH3 from 'kd-ui/ui/typography/h3';

export default function Loading() {
    return (<article className='container max-w-4xl py-6 lg:py-10 space-y-4'>
      <TypographyH3 kaisei>hello, i&apos;m krishna dubagunta 👋🏼</TypographyH3>
      <Skeleton className='h-[75px] w-full' />
      <br />
      <div className='w-full flex justify-center'>
        <Skeleton className='h-[250px] w-[250px] rounded-full' />
      </div>c
      <Skeleton className='h-[100px] w-full' />
      <Skeleton className='h-[175px] w-full' />
    </article>);
  }

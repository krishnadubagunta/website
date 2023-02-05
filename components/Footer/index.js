import Link from 'next/link'

const Footer = () => {
  return <div className='flex w-full bg-gray-900 rounded'>
    <div className='footer w-full flex items-center justify-between px-6 text-gray-300 text-sm text-xs'>
      <span>Made with <span className='text-red-700'>♥</span> by Sai Krishna Dubagunta</span>
      <span>2022</span>
      <div className='flex'>
        <div className='mr-2'>
          <Link href="https://twitter.com/dubaguntakrishn" passHref target="_blank">
              Twitter
          </Link>
        </div>
        <div className='mr-2'>
          <Link href="https://facebook.com/LithiumsLife" passHref target="_blank">
              Facebook
          </Link>
        </div>
        <div className='mr-2'>
          <Link href="https://linkedin.com/in/saikrishnadubaguntah" passHref target="_blank">
              LinkedIn
          </Link>
        </div>
      </div>
    </div>
  </div>
}

Footer.displayName = 'Footer'

export default Footer
import Link from 'next/link'

const Footer = () => {
  return <footer className='bg-gray-900'>
    <div className='footer flex flex-col sm:flex-row items-center justify-between py-1 px-6 text-gray-300 text-sm text-xs'>
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
  </footer>
}

Footer.displayName = 'Footer'

export default Footer
import Link from 'next/link'

const Footer = () => {
  return <div className='flex justify-center bg-gray-900 rounded px-6'>
    <div className='footer w-full flex items-center justify-between text-gray-300 text-sm' >
      <span>Made with <span className='text-red-700'>♥</span> by Sai Krishna Dubagunta</span>
      <span>2020</span>
      <div className='flex'>
        <div className='mr-2'>
          <Link href="https://twitter.com/dubaguntakrishn" passHref>
            <a target='_blank'>
              Twitter
            </a>
          </Link>
        </div>
        <div className='mr-2'>
          <Link href="https://facebook.com/LithiumsLife" passHref>
            <a target='_blank'>
              Facebook
            </a>
          </Link>
        </div>
        <div className='mr-2'>
          <Link href="https://linkedin.com/in/saikrishnadubaguntah" passHref>
            <a target='_blank'>
              LinkedIn
            </a>
          </Link>
        </div>
        <div className='mr-2'>
          <Link href="https://vydia.com" passHref>
            <a target='_blank'>
              Vydia
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
}

export default Footer
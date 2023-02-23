'use client'
import Link from '../../components/Link'
import { usePathname } from 'next/navigation'
import { Menu, Transition } from '@headlessui/react'
// import getCameraTypes from '../../utils/products/cameraTypes'
import capitalize from 'lodash/capitalize'
import { Fragment } from 'react'

export default function RoutedLinks({ cameraTypes }) {
  const pathname = usePathname()
  const path = pathname.split('/')[1] || 'home'

  const links = cameraTypes.map((cameraType) => ({
    href: `/photography/${cameraType}`,
    label: capitalize(cameraType),
    icon: cameraType === 'digital' ? 'camera' : cameraType
  }))

  return <>
    <div className='mx-1 md:mx-2'>
      <Link href='/' passHref shallow>
          <span className={`text-white ${path==='home' ? 'font-normal' : 'font-light'}`}>home</span>
      </Link>
    </div>
    <div className='mx-1 md:mx-2'>
    <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className={`text-white ${path==='photography' ? 'font-normal' : 'font-light'}`}>
            photography
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">

            {
            links.map((link) => (<Menu.Item key={link.href} as={Fragment}>
              {({ active }) => (
                  <Link
                    href={link.href}
                    className={`px-4 ${
                      active ? 'bg-gray-900 text-white' : 'bg-white text-black'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {link.label}
                  </Link>
              )}
            </Menu.Item>))
          }
          </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  </>
}
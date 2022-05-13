import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

const links = [
    { name: 'Worship', href: '#worship' },
    { name: 'What to Expect', href: '#what-to-expect' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Where', href: '#where' },
    { name: 'Youth', href: '#youth' },
];

export default function Nav() {
    return (
        <Popover className="bg-white z-10 relative md:sticky md:top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/" passHref>
                            <a>
                                <Image
                                    src="/gather_icon.webp"
                                    alt="Gather Church Logo"
                                    height="50px"
                                    width="50px"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        {links.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Image
                                        src="/gather_icon.webp"
                                        alt="Gather Church Logo"
                                        height="50px"
                                        width="50px"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {links.map(item => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-my-3 p-2 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                {item.name}
                                            </span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

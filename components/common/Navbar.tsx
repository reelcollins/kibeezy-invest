'use client';

import { Fragment } from 'react'

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(' ')
  }

import { usePathname } from 'next/navigation';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import { NavLink } from '@/components/common';
import { FaHouse } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const [logout] = useLogoutMutation();

	const { isAuthenticated } = useAppSelector(state => state.auth);

	const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
	};

	const isSelected = (path: string) => (pathname === path ? true : false);

	const authLinks = (isMobile: boolean) => (
		<>
			{/* <NavLink
				isSelected={isSelected('/dashboard')}
				isMobile={isMobile}
				href='/dashboard'
			>
				Dashboard
			</NavLink> */}
			<NavLink
				isSelected={isSelected('/home')}
				isMobile={isMobile}
				href='/home'
			>
				Home
			</NavLink>
			{/* <NavLink isMobile={isMobile} onClick={handleLogout}>
				Logout
			</NavLink> */}
		</>
	);

	const guestLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/auth/login')}
				isMobile={isMobile}
				href='/auth/login'
			>
				Login
			</NavLink>
			<NavLink
				isSelected={isSelected('/auth/register')}
				isMobile={isMobile}
				href='/auth/register'
			>
				Register
			</NavLink>
		</>
	);

	return (
		<Disclosure as='nav' className='bg-gray-800'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='flex flex-shrink-0 items-center'>
									<NavLink href='/home' isBanner>
										<span className='flex items-center text-lg font-bold ml-1'>
											NYUMB<FaHouse className='h-4 w-4 text-primary ml-2' />NI
										</span>
									</NavLink>
								</div>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex space-x-4'>
										{isAuthenticated
											? authLinks(false)
											: guestLinks(false)}
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">Open user menu</span>
											<img
												className="h-8 w-8 rounded-full"
												// src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												src="https://vercel-app.s3.amazonaws.com/media/Profile_Pic-01.png"
												alt=""
											/>
											{/* <CgProfile /> */}
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
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
												<a
													href="/profile"
													className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
												>
													Your Profile
												</a>
												)}
											</Menu.Item>
											{/* <Menu.Item>
												{({ active }) => (
												<a
													href='/'
													className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
												>
													Settings
												</a>
												)}
											</Menu.Item>      */}
											<Menu.Item>
												{({ active }) => (
												<a
													href="/"
													onClick={handleLogout}
													className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
												>
													Sign Out
													
												</a>
												)}
											</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>

								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2'>
							{isAuthenticated
								? authLinks(true)
								: guestLinks(true)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

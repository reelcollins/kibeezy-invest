'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { GiBee } from 'react-icons/gi';
import { NavLink } from '../common';

export default function Navbar() {
	// State to track gradient background position
	const [gradientPosition, setGradientPosition] = useState(0);
	const { user } = useUser();

	// Update gradient position periodically
	useEffect(() => {
		const interval = setInterval(() => {
			setGradientPosition((prev) => (prev + 1) % 360); // Loop through 360 degrees
		}, 50); // Update every 50ms for a smooth effect

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	const gradientStyle = {
		background: `linear-gradient(${gradientPosition}deg, #3b82f6, #22c55e, #a855f7, #ef4444, #facc15, #6366f1)`,
		backgroundSize: '200% 200%',
		transition: 'background-position 0.1s ease-in-out',
	};

	return (
		<nav style={gradientStyle}>
			<div className="mx-auto max-w-7xl px-6 sm:px-2 lg:px-4">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<NavLink href="/" isBanner>
								<span className="flex items-center text-xl font-bold ml-1 text-white">
									<GiBee className="h-4 w-4 text-white ml-2" />
									Kibeezy Technologies™
								</span>
							</NavLink>
						</div>
					</div>
					<div className="flex space-x-4">
						
						{/* <NavLink href="/stations" className="text-white hover:text-gray-300 text-lg font-medium">Stations</NavLink> */}
						{/* <NavLink href="/demo" className="text-white hover:text-gray-300 text-lg font-medium">Demo</NavLink> */}
						<NavLink href="/about" className="text-white hover:text-gray-300 text-lg font-medium">About</NavLink>
						{user ? (
							<NavLink href="/api/auth/logout" className="text-white hover:text-red-700 text-lg font-medium">Logout</NavLink>
						) : (
							<NavLink href="/api/auth/login" className="text-white hover:text-blue-300 text-lg font-medium">Login</NavLink>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

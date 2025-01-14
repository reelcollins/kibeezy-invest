'use client';

import { useEffect, useState } from 'react';
import { GiBee } from 'react-icons/gi';
import { NavLink } from '../common';

export default function Navbar() {
	// State to track gradient background position
	const [gradientPosition, setGradientPosition] = useState(0);

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
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<NavLink href="/" isBanner>
								<span className="flex items-center text-xl font-bold ml-1 text-white">
									<GiBee className="h-4 w-4 text-white ml-2" />
									Kibeezy WiFi
								</span>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
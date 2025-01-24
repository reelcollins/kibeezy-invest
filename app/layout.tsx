import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Provider from '@/redux/provider';
import { Footer, Navbar } from '@/components/common';
import { Setup } from '@/components/utils';
import { Providers } from './providers'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { register } from 'swiper/element/bundle';
register();
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({
	subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Kibeezy WiFi',
	description: 'Kibeezy WiFi Welcome page',
	};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<Providers>
						<UserProvider>
							<Theme>
								<Setup />
								<Navbar />
								<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8'>
									{children}
								</div>
								<Footer />
							</Theme>
						</UserProvider>
					</Providers>
				</Provider>

			</body>
		</html>
	);
}


'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${
					isDarkMode && 'dark dark:invert'
				}`}>
				<TransitionProvider
					isDarkMode={isDarkMode}
					setIsDarkMode={setIsDarkMode}>
					{children}
				</TransitionProvider>
			</body>
		</html>
	);
}

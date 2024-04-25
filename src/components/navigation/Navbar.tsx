import { Dispatch, SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import NavLink, { NavRoute } from './NavLink';
import ToggleLightDarkMode from '../toggle/ToggleLightDarkMode';

const routes: NavRoute[] = [
	{ url: '/', title: 'Home' },
	{ url: '/about', title: 'About' },
	{ url: '/portfolio', title: 'Portfolio' },
];

interface NavbarProps {
	isDarkMode: boolean;
	setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: 'rgb(255,255,255)',
		},
	};
	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};

	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: 'rgb(255,255,255)',
		},
	};

	const listVariants = {
		closed: {
			x: '100vw',
		},
		opened: {
			x: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	};

	const listItemVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
			{/* LINKS */}
			<div className="hidden md:flex gap-4 w-1/3">
				{routes.map((route) => (
					<NavLink route={route} key={route.title} />
				))}
			</div>
			{/* LOGO */}
			<div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
				<ToggleLightDarkMode
					isChecked={isDarkMode}
					setIsChecked={setIsDarkMode}
				/>
			</div>
			{/* SOCIAL */}
			<div className="hidden md:flex md:justify-end gap-4 w-1/3">
				<Link href="https://github.com/andrealswa" target="_blank">
					<Image
						src="/github-mark.svg"
						alt=""
						width={24}
						height={24}
					/>
				</Link>
				<Link
					href="https://www.linkedin.com/in/andrea-jeney/"
					target="_blank">
					<Image src="/linkedin.svg" alt="" width={24} height={24} />
				</Link>
			</div>
			{/* RESPONSIVE MENU */}
			<div className="md:hidden">
				{/* MENU BUTTON */}
				<button
					className="w-10 h-8 flex flex-col justify-between z-50 relative"
					onClick={() => setIsOpen((prev) => !prev)}>
					<motion.div
						variants={topVariants}
						animate={isOpen ? 'opened' : 'closed'}
						className="w-10 h-1 bg-black rounded origin-left"></motion.div>
					<motion.div
						variants={centerVariants}
						animate={isOpen ? 'opened' : 'closed'}
						className="w-10 h-1 bg-black rounded"></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={isOpen ? 'opened' : 'closed'}
						className="w-10 h-1 bg-black rounded origin-left"></motion.div>
				</button>
				{/* MENU LIST */}
				{isOpen && (
					<motion.div
						variants={listVariants}
						initial="closed"
						animate="opened"
						className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
						{routes.map((route) => (
							<motion.div
								variants={listItemVariants}
								className=""
								key={route.title}>
								<Link href={route.url} target="_self">
									{route.title}
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

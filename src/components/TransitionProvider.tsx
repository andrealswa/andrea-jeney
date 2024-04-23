import { AnimatePresence } from 'framer-motion';
import Navbar from './navigation/Navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction } from 'react';

interface TransitionProviderProps {
	children: ReactNode;
	isDarkMode: boolean;
	setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const TransitionProvider = ({
	children,
	isDarkMode,
	setIsDarkMode,
}: TransitionProviderProps) => {
	const pathName = usePathname();

	return (
		<AnimatePresence mode="wait">
			<div
				key={pathName}
				className="w-screen h-screen bg-gradient-to-b from-red-200 to-green-100  dark:bg-slate-900">
				<motion.div
					className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
					animate={{ height: '0vh' }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
				/>
				<motion.div
					className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}>
					{pathName.substring(1)}
				</motion.div>
				<motion.div
					className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
					initial={{ height: '140vh' }}
					animate={{ height: '0vh', transition: { delay: 0.5 } }}
				/>
				<div className="h-24">
					<Navbar
						isDarkMode={isDarkMode}
						setIsDarkMode={setIsDarkMode}
					/>
				</div>
				<div className="h-[calc(100vh-6rem)]">{children}</div>
			</div>
		</AnimatePresence>
	);
};

export default TransitionProvider;

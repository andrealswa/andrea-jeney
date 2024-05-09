'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<motion.div
			className="h-full"
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			<div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
				{/* TEXT CONTAINER */}
				<div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 items-start justify-center">
					{/* TITLE */}
					<h1 className="text-4xl md:text-6xl font-bold">
						Andrea Jeney
					</h1>
					{/* DESC */}
					<p className="md:text-3xl">Software Engineer</p>
					<p className="md:text-l">
						I bridge the gap between design and engineering — creating
						things that look pretty with a robust build under the
						surface.
					</p>
				</div>
				{/* IMAGE CONTAINER */}
				{/* <div className="h-1/2 m:h-full lg:w-1/2 flex items-end relative"> */}
				<div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
					<motion.div
						className="h-[270px] w-[270px]"
						whileHover={{
							rotateY: [360, 0, 360],
							y: [0, -30, 0],
							transition: {
								duration: 2,
								ease: 'anticipate',
								repeat: Infinity,
								repeatDelay: 1,
								delay: 0,
							},
						}}>
						<Image
							src="/andrea-pic.png"
							alt="Andrea display picture"
							width="384"
							height="512"
							className="object-contain w-62 h-62 rounded-full mx-auto dark:invert"
						/>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

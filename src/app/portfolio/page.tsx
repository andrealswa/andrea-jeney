'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const items = [
	{
		id: 1,
		color: 'from-red-300 to-blue-300',
		title: 'Cannoli Windsor',
		desc: 'Generated an ecommerce web application for a small business owner using Next.js with React.',
		img: '/CannoliWindsor.png',
		githubLink:
			'https://github.com/andrealswa/cannoli-windsor-app-new',
		link: 'https://cannoli-windsor-app-new.vercel.app/',
	},
	{
		id: 2,
		color: 'from-blue-300 to-violet-300',
		title: 'Diversify Computer Science',
		desc: 'Deployed with Firebase.',
		img: '/DiversifyCompSci.png',
		githubLink:
			'https://github.com/andrealswa/diversifycomputerscience',
		link: 'https://diversify-cb37d.web.app/',
	},
	// {
	// 	id: 3,
	// 	color: 'from-violet-300 to-purple-300',
	// 	title: 'Shopify SRE Challenge',
	// 	desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
	// 	img: '/Users/andrealswa/Desktop/portfolio/andrea-jeney/public/linkedin.svg',
	// 	githubLink: 'https://github.com/andrealswa/shopify-sre-challenge',
	// },
	{
		id: 3,
		color: 'from-purple-300 to-red-300',
		title: 'Todo App',
		desc: 'Basic Todo app created with TypeScript, React, Python and Django.',
		img: '/Todo.png',
		githubLink: 'https://github.com/andrealswa/Todo-App',
	},
];

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll(ref.current);
	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

	const endText = 'Thanks for visiting';
	return (
		<motion.div
			className="h-full"
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			<div className="h-[600vh] relative">
				<div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-7xl text-center">
					Checkout some of my projects
				</div>
				<div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
					<motion.div style={{ x }} className="flex">
						<div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
						{items.map((item) => (
							<div
								className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
								key={item.id}>
								<div className="flex flex-col gap-8 ">
									<h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl text-white dark:invert">
										{item.title}
									</h1>
									<div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
										{item.link ? (
											<Link
												href={item.link}
												target="_blank"
												className="flex justify-end">
												<Image
													className="dark:invert"
													src={item.img}
													alt=""
													fill
												/>
											</Link>
										) : (
											<Image
												className="dark:invert"
												src={item.img}
												alt=""
												fill
											/>
										)}
									</div>
									<p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
										{item.desc}
									</p>
									<Link
										href={item.githubLink}
										target="_blank"
										className="flex justify-end">
										<button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
											Visit Github Repository
										</button>
									</Link>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
			<div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center dark:invert">
				<div className="h-1/2 lg:h-1/2 lg:w-1/2 flex pt-10 items-center justify-center text-6xl">
					<motion.div>
						{endText.split('').map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.1,
								}}>
								{/* <h1 className="text-4xl" key={index}> */}
								{letter}
								{/* </h1> */}
							</motion.span>
						))}
						👩🏼‍💻😊
					</motion.div>
				</div>
				<div className="relative">
					<motion.svg
						animate={{ rotate: 360 }}
						transition={{
							duration: 8,
							ease: 'linear',
							repeat: Infinity,
						}}
						viewBox="0 0 300 300"
						className="w-64 h-64 md:w-[500px] md:h-[500px] ">
						<defs>
							<path
								id="circlePath"
								d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
							/>
						</defs>
						<text fill="#000">
							<textPath xlinkHref="#circlePath" className="text-xl">
								Andrea Jeney Software Dev Portfolio
							</textPath>
						</text>
					</motion.svg>
					<Link
						href="/"
						className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
						Home
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Portfolio;

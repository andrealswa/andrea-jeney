'use client';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const About = () => {
	const containerRef = useRef();

	const { scrollYProgress } = useScroll(containerRef.current);

	const skillRef = useRef();
	// const isSkillRefInView = useInView(skillRef, {once:true});
	const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

	const experienceRef = useRef();
	const isExperienceRefInView = useInView(experienceRef, {
		margin: '-100px',
	});
	return (
		<motion.div
			className="h-full"
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			{/* CONTAINER */}
			<div
				className="h-full overflow-scroll lg:flex"
				ref={containerRef}>
				{/* TEXT CONTAINER */}
				<div className="p-4 sm:p-8 md:p-8 lg:p-12 xl:p-12 md:pt-0 lg:pt-0 xl:pt-0 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
					{/* BIOGRAPHY CONTAINER */}
					<div className="flex flex-col gap-12 justify-center">
						{/* BIOGRAPHY IMAGE */}

						{/* BIOGRAPHY TITLE */}
						<h1 className="font-bold text-2xl">EDUCATION</h1>
						{/* BIOGRAPHY DESC */}
						<p className="text-lg">
							University of Windsor - Bachelors of Computer Science
							degree.
						</p>

						{/* SKILLS CONTAINER */}
						<div
							className="flex flex-col gap-12 justify-center"
							ref={skillRef}>
							{/* SKILL TITLE */}
							<motion.h1
								initial={{ x: '-300px' }}
								animate={isSkillRefInView ? { x: 0 } : {}}
								transition={{ delay: 0.2 }}
								className="font-bold text-2xl">
								SKILLS
							</motion.h1>
							{/* SKILL LIST */}
							<motion.div
								initial={{ x: '-300px' }}
								animate={isSkillRefInView ? { x: 0 } : {}}
								className="flex gap-4 flex-wrap">
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									JavaScript
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									TypeScript
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									React.js
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Next.js
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									HTML5
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									SCSS
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Tailwind CSS
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Python
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Django
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Node.js
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Angular
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									GraphQL
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Framer Motion
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Webpack
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Vite
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Docker
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									AWS
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Firebase
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Vercel
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Git
								</div>
								<div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
									Figma
								</div>
							</motion.div>
						</div>
					</div>
				</div>
				{/* SVG CONTAINER */}
				<div className="flex justify-center p-4 sm:p-8 md:p-8 lg:p-12 xl:p-12 md:pt-0 lg:pt-0 xl:pt-0 w-full w-[200px] sticky top-0 z-30 xl:w-1/2">
					{/* EXPERIENCE CONTAINER */}
					<div
						className="flex flex-col justify-start gap-12 pb-48 pt-0"
						ref={experienceRef}>
						{/* EXPERIENCE TITLE */}
						<motion.h1
							initial={{ x: '50vw' }}
							animate={isExperienceRefInView ? { x: '0' } : {}}
							transition={{ delay: 0.2 }}
							className="font-bold text-2xl">
							EXPERIENCE
						</motion.h1>
						{/* EXPERIENCE LIST */}
						<motion.div
							initial={{ x: '-300px' }}
							animate={isExperienceRefInView ? { x: '0' } : {}}
							className="">
							{/* EXPERIENCE LIST ITEM */}
							<div className="flex justify-between h-48">
								{/* LEFT */}
								<div className="w-[200px] min-w-100">
									{/* JOB TITLE */}
									<div className="bg-white p-3 w-full font-semibold rounded-b-lg rounded-s-lg">
										Software Engineer
										{/* JOB DESC */}
										<div className="pt-3 text-sm">CDK Global</div>
										{/* JOB DATE */}
										<div className="pt-3 text-red-400 text-sm font-semibold">
											2022 - 2024
										</div>
									</div>
								</div>
								{/* CENTER */}
								<div className="w-[100px] flex justify-center">
									{/* LINE */}
									<div className="w-1 h-full bg-gray-600 rounded relative">
										{/* LINE CIRCLE */}
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className="w-[200px] "></div>
							</div>
							{/* EXPERIENCE LIST ITEM */}
							<div className="flex justify-between h-48">
								{/* LEFT */}
								<div className="w-[200px] "></div>
								{/* CENTER */}
								<div className="w-[100px] flex justify-center">
									{/* LINE */}
									<div className="w-1 h-full bg-gray-600 rounded relative">
										{/* LINE CIRCLE */}
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className="w-[200px] ">
									<div className="bg-white p-3 font-semibold rounded-r-lg rounded-b-lg">
										Software Developer
										{/* JOB DESC */}
										<div className="pt-3 text-sm">
											Gray Oncology Solutions
										</div>
										{/* JOB DATE */}
										<div className="pt-3 text-red-400 text-sm font-semibold">
											2020 - 2022
										</div>
									</div>
								</div>
							</div>
							{/* EXPERIENCE LIST ITEM */}
							<div className="flex justify-between h-48">
								{/* LEFT */}
								<div className="w-[200px] ">
									{/* JOB TITLE */}
									<div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
										Frontend Developer
										{/* JOB DESC */}
										<div className="pt-3 text-sm">
											Cannoli Windsor
										</div>
										{/* JOB DATE */}
										<div className="pt-3 text-red-400 text-sm font-semibold">
											2019 - 2020
										</div>
									</div>
								</div>
								{/* CENTER */}
								<div className="w-[100px] flex justify-center">
									{/* LINE */}
									<div className="w-1 h-full bg-gray-600 rounded relative">
										{/* LINE CIRCLE */}
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className="w-[200px] "></div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
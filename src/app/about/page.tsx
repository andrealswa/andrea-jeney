'use client';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const About = () => {
	const containerRef =
		useRef() as React.MutableRefObject<HTMLInputElement>;

	const skillRef =
		useRef() as React.MutableRefObject<HTMLInputElement>;
	// const isSkillRefInView = useInView(skillRef, {once:true});
	const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

	const experienceRef =
		useRef() as React.MutableRefObject<HTMLInputElement>;
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
					<div className="flex flex-col gap-12 justify-center">
						<motion.h1
							initial={{ x: '-300px' }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className="font-bold text-2xl">
							EDUCATION
							<div className="border-outline outline mt-12 p-10 rounded">
								<span className="text-lg font-bold pb-5">
									University of Windsor
								</span>
								<p className="text-m pt-5">
									Bachelor of Science - Computer Science degree.
								</p>
							</div>
						</motion.h1>

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
								<div className="rounded  p-2 text-sm bg-black text-white">
									JavaScript
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									TypeScript
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									React.js
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Lodash
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Angular
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									HTML5
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									SCSS
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Tailwind CSS
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Next.js
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Python
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Django
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Node.js
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Framer Motion
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Webpack
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Vite
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									AWS
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Firebase
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Vercel
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
									Git
								</div>
								<div className="rounded  p-2 text-sm bg-black text-white">
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
								<div className="w-[150px] min-w-100">
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
								<div className="w-[50px] flex justify-center">
									{/* LINE */}
									<div className="w-1 h-full bg-gray-600 rounded relative">
										{/* LINE CIRCLE */}
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2" />
									</div>
								</div>
								{/* RIGHT */}
								<div className="w-[150px]" />
							</div>
							{/* EXPERIENCE LIST ITEM */}
							<div className="flex justify-between h-48">
								{/* LEFT */}
								<div className="w-[150px]" />
								{/* CENTER */}
								<div className="w-[50px] flex justify-center">
									{/* LINE */}
									<div className="w-1 h-full bg-gray-600 rounded relative">
										{/* LINE CIRCLE */}
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2" />
									</div>
								</div>
								{/* RIGHT */}
								<div className="w-[150px]">
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
							<div className="flex justify-between h-48 sm:max-w-[400px]">
								{/* LEFT */}
								<div className="w-[150px]">
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
								<div className="w-[50px] flex justify-center">
									{/* LINE */}
									<div className="w-1 h-full bg-gray-600 rounded relative">
										{/* LINE CIRCLE */}
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2" />
									</div>
								</div>
								{/* RIGHT */}
								<div className="w-[150px]" />
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;

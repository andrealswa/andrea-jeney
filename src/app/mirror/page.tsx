'use client';
import { motion } from 'framer-motion';
import { Input } from '@nextui-org/input';
import { useState } from 'react';

const Mirror = () => {
	const [inputSentence, setInputSentence] = useState<string | null>(
		null
	);
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputSentence(e.target.value);
	};
	return (
		<div className="h-full flex flex-col items-center">
			<Input
				className="bg-transparent p-10 h-1/2"
				type="text"
				id="todo-description"
				name="description"
				onChange={handleOnChange}
				placeholder="Enter something to be reversed"
			/>

			<motion.div
				className=" flex justify-center font-bold text-7xl w-[600px] h-[600px] mb-[200px] border-outline outline-slate-400 outline  rounded"
				whileHover={{
					rotateY: 180,
					transition: {
						duration: 2,
						ease: 'linear',
						repeat: 0,
						repeatDelay: 0,
						delay: 0,
					},
				}}>
				{inputSentence}
			</motion.div>
		</div>
	);
};

export default Mirror;

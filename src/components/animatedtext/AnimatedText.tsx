import { motion } from 'framer-motion';

const cursorVariants = {
	blinking: {
		opacity: [0, 0, 1, 1],
		transition: {
			duration: 1,
			repeat: Infinity,
			repeatDelay: 0,
			ease: 'linear',
			times: [0, 0.5, 0.5, 1],
		},
	},
};

interface AnimatedTextProps {
	text: string;
	className?: string;
	el?: keyof JSX.IntrinsicElements;
}

const AnimatedText = ({ text, className, el }: AnimatedTextProps) => {
	const defaultAnimations = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	const displayText = text
		.split('')
		.map((char) => (
			<motion.span variants={defaultAnimations}>{char}</motion.span>
		));
	return (
		<div className={className ? className : ''}>
			<span className="sr-only">{text}</span>
			<motion.span
				initial="hidden"
				animate="visible"
				transition={{ staggerChildren: 0.1 }}
				aria-hidden>
				{displayText}
			</motion.span>
		</div>
	);
};

export default AnimatedText;

"use client";
import * as React from "react";
import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";

interface iISmoothScrollHeroProps {
	scrollHeight?: number;
	desktopImage?: string;
	mobileImage?: string;
}

const SmoothScrollHeroBackground: React.FC<iISmoothScrollHeroProps & { scrollYProgress: any }> = ({
	desktopImage,
	mobileImage,
	scrollYProgress,
}) => {
	// 40% zoom means we clip 30% from each side.
	// As we scroll to 80% of the section, it expands to 100%.
	const clipStart = useTransform(scrollYProgress, [0, 0.8], [30, 0]);
	const clipEnd = useTransform(scrollYProgress, [0, 0.8], [70, 100]);

	const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

	// Parallax effect on the background image itself
	const backgroundSize = useTransform(scrollYProgress, [0, 1], ["140%", "100%"]);

	return (
		<motion.div
			className="absolute inset-0 w-full h-full bg-black/90"
			style={{
				clipPath,
				willChange: "transform, opacity, clip-path",
			}}
		>
			<motion.div
				className="absolute inset-0 md:hidden"
				style={{
					backgroundImage: `url(${mobileImage})`,
					backgroundSize,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>
			<motion.div
				className="absolute inset-0 hidden md:block"
				style={{
					backgroundImage: `url(${desktopImage})`,
					backgroundSize,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>
			{/* Optional overlay for better text readability later */}
			<div className="absolute inset-0 bg-black/30" />
		</motion.div>
	);
};

const SmoothScrollHero: React.FC<iISmoothScrollHeroProps> = ({
	scrollHeight = 2000,
	desktopImage = "https://images.pexels.com/photos/32630752/pexels-photo-32630752.jpeg", // A himalayan/mountain looking image
	mobileImage = "https://images.pexels.com/photos/33792550/pexels-photo-33792550.jpeg",
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// hint visibility state (disappear on scroll or after timeout)
	const [showHint, setShowHint] = React.useState(true);
	React.useEffect(() => {
		const onScroll = () => setShowHint(false);
		window.addEventListener("scroll", onScroll, { passive: true });
		const timer = setTimeout(() => setShowHint(false), 4000);
		return () => {
			window.removeEventListener("scroll", onScroll);
			clearTimeout(timer);
		};
	}, []);

	// The text fades in during the last 20% of the scroll
	const textOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
	const textY = useTransform(scrollYProgress, [0.8, 1], [40, 0]);

	return (
		<div
			ref={containerRef}
			style={{ height: `${scrollHeight}px`, touchAction: 'pan-y' }}
			className="relative w-full bg-black"
		>
			<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
				<SmoothScrollHeroBackground
					scrollYProgress={scrollYProgress}
					desktopImage={desktopImage}
					mobileImage={mobileImage}
				/>

				<motion.div
					style={{ opacity: textOpacity, y: textY }}
					className="relative z-10 text-center px-4"
				>
					<h1
						className="text-4xl md:text-7xl lg:text-8xl text-white font-display italic tracking-tight uppercase origin-center"
						style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.5)" }}
					>
						Hardened for<br />the Himalayas
					</h1>
					<p className="text-white/80 mt-6 text-sm md:text-lg tracking-widest uppercase">
						Premium Rental Equipment
					</p>
				</motion.div>

				{/* scroll hint */}
				{showHint && (
					<motion.div
						initial={{ opacity: 1 }}
						animate={{ opacity: 0 }}
						transition={{ duration: 2.5 }}
						className="absolute bottom-10 w-full flex flex-col items-center text-white text-sm"
					>
						<span>Scroll down</span>
						<svg
							className="w-6 h-6 mt-1 animate-bounce"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default SmoothScrollHero;

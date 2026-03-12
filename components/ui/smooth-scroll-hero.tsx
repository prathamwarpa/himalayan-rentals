"use client";
import * as React from "react";

import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
	useReducedMotion,
} from "framer-motion";

interface iISmoothScrollHeroProps {
	/**
	 * Height of the scroll section in pixels
	 * @default 1500
	 */
	scrollHeight: number;
	/**
	 * Background image URL for desktop view
	 * @default "https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
	 */
	desktopImage: string;
	/**
	 * Background image URL for mobile view
	 * @default "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	 */
	mobileImage: string;
	/**
	 * Initial clip path percentage
	 * @default 25
	 */
	initialClipPercentage: number;
	/**
	 * Final clip path percentage
	 * @default 75
	 */
	finalClipPercentage: number;
}

interface iISmoothScrollHeroBackgroundProps extends iISmoothScrollHeroProps {}

const SmoothScrollHeroBackground: React.FC<
	iISmoothScrollHeroBackgroundProps
> = ({
	scrollHeight,
	desktopImage,
	mobileImage,
	initialClipPercentage,
	finalClipPercentage,
}) => {
	const {scrollY} = useScroll();
	const reduceMotion = useReducedMotion();

	// iOS Safari often ignores background-attachment: fixed; the
	// `.bg-fixed-ios` utility defined in globals.css adds a ::before
	// fallback. We keep the image container in the same element so
	// the clipping animation does not affect the static background.


	const clipStart = useTransform(
		scrollY,
		[0, scrollHeight],
		[initialClipPercentage, 0],
	);
	const clipEnd = useTransform(
		scrollY,
		[0, scrollHeight],
		[finalClipPercentage, 100],
	);

	const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

	const backgroundSize = useTransform(
		scrollY,
		[0, scrollHeight + 500],
		reduceMotion ? ["100%", "100%"] : ["170%", "100%"],
	);

	// if reduced motion is requested we simply keep the background static


	return (
		<motion.div
			className="sticky top-0 h-screen w-full bg-black bg-fixed-ios"
			style={{
				clipPath,
				willChange: "transform, opacity",
			}}
		>
			{/* Mobile background */}
			<motion.div
				className="absolute inset-0 md:hidden bg-fixed-ios"
				style={{
					backgroundImage: `url(${mobileImage})`,
					backgroundSize,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					willChange: "transform",
				}}
			/>
			{/* Desktop background */}
			<motion.div
				className="absolute inset-0 hidden md:block bg-fixed-ios"
				style={{
					backgroundImage: `url(${desktopImage})`,
					backgroundSize,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					willChange: "transform",
				}}
			/>
		</motion.div>
	);
};

/**
 * A smooth scroll hero component with parallax background effect
 * @param props - Component props
 * @returns React component
 */
 const SmoothScrollHero: React.FC<iISmoothScrollHeroProps> = ({
	scrollHeight = 1500,
	desktopImage = "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
	mobileImage = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	initialClipPercentage = 25,
	finalClipPercentage = 75,
}) => {
	return (
		<div
			style={{height: `calc(${scrollHeight}px + 100dvh)`}}
			className="relative w-full"
		>
			<SmoothScrollHeroBackground
				scrollHeight={scrollHeight}
				desktopImage={desktopImage}
				mobileImage={mobileImage}
				initialClipPercentage={initialClipPercentage}
				finalClipPercentage={finalClipPercentage}
			/>
		</div>
	);
};
export default SmoothScrollHero;

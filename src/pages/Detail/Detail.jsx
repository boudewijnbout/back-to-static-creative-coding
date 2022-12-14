import React from "react";
import { delay, motion } from "framer-motion";
import "./Detail.css";
import CMDImage from "../../assets/cmd-bloem.png";

const transition = { duration: 1.0, ease: [0.6, 0.01, -0.05, 0.9] };

const mainTitle = {
	show: {
		y: 0,
		transition: {
			delayChildren: 0.6,
			staggerChildren: 0.04,
			staggerDirection: -1,
		},
	},
};

const secondaryTitle = {
	show: {
		y: 0,
		transition: {
			delayChildren: 1,
			staggerChildren: 0.04,
			staggerDirection: 1,
		},
	},
};

const letter = {
	initial: {
		y: 100,
	},
	show: {
		y: 0,
		transition: { duration: 1, ...transition },
	},
};

const Detail = () => {
	return (
		<main>
			{/* Title */}
			<motion.div className="title-wrapper">
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 1.5, ...transition } }}
					className="chapter-number"
				>
					1.0
				</motion.span>

				<motion.span
					variants={mainTitle}
					initial="initial"
					animate="show"
					className="main-title"
				>
					<motion.span variants={letter}>B</motion.span>
					<motion.span variants={letter}>e</motion.span>
					<motion.span variants={letter}>o</motion.span>
					<motion.span variants={letter}>o</motion.span>
					<motion.span variants={letter}>g</motion.span>
					<motion.span variants={letter}>d</motion.span>
					<motion.span variants={letter}>e</motion.span>
				</motion.span>
				<motion.span
					variants={secondaryTitle}
					initial="initial"
					animate="show"
					className="main-title"
				>
					<motion.span variants={letter}>l</motion.span>
					<motion.span variants={letter}>e</motion.span>
					<motion.span variants={letter}>e</motion.span>
					<motion.span variants={letter}>r</motion.span>
					<motion.span variants={letter}>r</motion.span>
					<motion.span variants={letter}>e</motion.span>
					<motion.span variants={letter}>s</motion.span>
					<motion.span variants={letter}>u</motion.span>
					<motion.span variants={letter}>l</motion.span>
					<motion.span variants={letter}>t</motion.span>
					<motion.span variants={letter}>a</motion.span>
					<motion.span variants={letter}>t</motion.span>
					<motion.span variants={letter}>e</motion.span>
					<motion.span variants={letter}>n</motion.span>
				</motion.span>
			</motion.div>

			{/* Image */}
			<section>
				<motion.div
					animate={{
						transition: transition,
					}}
					className="image-wrapper"
				>
					<motion.img
						initial={{ y: "50%" }}
						animate={{
							width: "100%",
							transition: transition,
							y: 0,
						}}
						src={CMDImage}
						alt=""
					/>
				</motion.div>
			</section>

			{/* Main Content */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 2, ...transition } }}
				className="main-content"
			>
				<div>
					<span>1.1</span>
					<h2>Humanity-centered digital designers</h2>
				</div>
				<article>
					<p>
						CMD Amsterdam leidt studenten op tot (junior) Humanity-centred
						ontwerpers van digitale, interactieve producten (zie ook visie CMD
						Amsterdam). Iedere student krijgt een stevige basis van techniek,
						interactie-ontwerp en vormgeving. Daarnaast brengen ze de context in
						kaart en kunnen ze ontwerpuitdagingen bevragen en helder verwoorden.
						Afhankelijk van interesse en ambitie verbreden of verdiepen
						studenten deze basiskennis en -vaardigheden.
					</p>
				</article>
			</motion.section>
		</main>
	);
};

export default Detail;

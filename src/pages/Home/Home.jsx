import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CMDImage from "../../assets/cmd-bloem.png";
import "./Home.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = () => {
	return (
		<main className="container">
			<section className="chapter-content-wrapper">
				{/* Chapter number */}
				<motion.span
					exit={{ opacity: 0 }}
					transition={{ transition }}
					className="chapter-number"
				>
					1.0
				</motion.span>

				{/* Main image */}
				<Link to={"/detail"}>
					<picture>
						<img
							src={CMDImage}
							alt="Bloemen met blaadjes waarop developer jargon staat geschreven"
						/>
					</picture>
				</Link>

				{/* Chapter title */}
				<motion.h1
					exit={{ opacity: 0 }}
					transition={transition}
					className="chapter-title"
				>
					Beoogde leerresultaten
				</motion.h1>
			</section>
		</main>
	);
};

export default Home;

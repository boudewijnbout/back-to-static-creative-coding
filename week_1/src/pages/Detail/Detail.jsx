import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Detail.css";
import CMDImage from "../../assets/cmd-bloem.png";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Detail = () => {
  return (
    <main>
      <section>
        <motion.div
          initial={{ y: "-50%" }}
          animate={{
            y: 0,
            width: "100%",
            height: window.innerWidth > 1440 ? 800 : 400,
            transition: { delay: 0.2, ...transition },
          }}
          className="image-wrapper"
        >
          <img src={CMDImage} alt="" />
        </motion.div>
      </section>
    </main>
  );
};

export default Detail;

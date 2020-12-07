import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageBackground, View } from "react-native";

import jeanpierrefoucault from "./jeanpierrefoucault.png";
import bulle from "./bulle.png";
import lesMissEnFond from "./lesmiss.jpeg";

import "./MissFrance.css";

const ANIMATION_DURATION_S = 0.8;

const MissFrance = () => (
    <AnimatePresence>
      <motion.div
        className="imageEntreEcran2"
        key={"icon"}
        initial={{ x: "0%", y: "100%", opacity: 0 }}
        exit={{ y: "100%", opacity: 0 }}
        animate={{ y: "26%", opacity: 1 }}
        transition={{ duration: ANIMATION_DURATION_S, ease: "easeInOut" }}
      >
        <img src={jeanpierrefoucault} className="imageEntreEcran2" />
      </motion.div>
      <motion.div
        className="bulleEntreEcran2"
        key={"icon2"}
        initial={{ x: "0%", y: "-500%", opacity: 0 }}
        exit={{ y: "0%", opacity: 0 }}
        animate={{ y: "-350%", opacity: 1 }}
        transition={{ duration: ANIMATION_DURATION_S, ease: "easeInOut" }}
      >
        <img src={bulle} className="bulleEntreEcran2" />
      </motion.div>
    </AnimatePresence>
);
export default MissFrance;

//<span>Salut les filles</span>

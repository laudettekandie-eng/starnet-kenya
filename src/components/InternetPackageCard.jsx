import React from "react";
import { motion } from "framer-motion";

export default function InternetPackageCard({ duration, data, price, index }) {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-6 cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
      whileHover={{ scale: 1.1 }}
    >
      <h3 className="text-2xl font-semibold mb-2">{duration}</h3>
      <p className="text-lg mb-1">{data} Data</p>
      <p className="text-xl font-bold">{price}</p>
    </motion.div>
  );
}

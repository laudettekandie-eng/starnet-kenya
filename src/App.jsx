import React from "react";
import { motion } from "framer-motion";
import InternetPackageCard from "./components/InternetPackageCard";

const packages = [
  { id: 1, duration: "1 Day", data: "7GB", price: "Ksh 79" },
  { id: 2, duration: "7 Days", data: "12GB", price: "Ksh 89" },
  { id: 3, duration: "5 Days", data: "10GB", price: "Ksh 99" },
  { id: 4, duration: "14 Days", data: "25GB", price: "Ksh 130" },
  { id: 5, duration: "21 Days", data: "45GB", price: "Ksh 225" },
  { id: 6, duration: "30 Days", data: "Unlimited", price: "Ksh 299" },
];

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-900 text-white flex flex-col items-center p-6">
      <header className="mb-10 text-center max-w-3xl">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Starnet Kenya
        </motion.h1>
        <motion.p
          className="text-xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Affordable Internet Packages (Available on all networks)
        </motion.p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {packages.map(({ id, duration, data, price }) => (
          <InternetPackageCard
            key={id}
            duration={duration}
            data={data}
            price={price}
            index={id}
          />
        ))}
      </section>

      {/* Analytics snippet placeholder */}
      {/* Insert your analytics script here */}
    </main>
  );
}

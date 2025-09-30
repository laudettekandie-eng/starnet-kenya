
import { motion } from "framer-motion";

export default function App() {
  const packages = [
    { name: "1 Day - 7GB", price: "Ksh 79" },
    { name: "7 Days - 12GB", price: "Ksh 89" },
    { name: "5 Days - 10GB", price: "Ksh 99" },
    { name: "14 Days - 25GB", price: "Ksh 130" },
    { name: "21 Days - 45GB", price: "Ksh 225" },
    { name: "30 Days - Unlimited", price: "Ksh 299" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 flex flex-col items-center text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Starnet Kenya
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-8 text-lg"
      >
        Affordable Internet Packages (Available on all networks)
      </motion.p>

      <div className="grid gap-4 w-full max-w-md">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * i }}
            className="bg-white text-gray-900 rounded-xl p-4 shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <div className="flex justify-between">
              <span className="font-semibold">{pkg.name}</span>
              <span className="text-blue-600 font-bold">{pkg.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

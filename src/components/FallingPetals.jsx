import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FallingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Kita buat 20 kelopak bunga
    const totalPetals = 20;
    const newPetals = Array.from({ length: totalPetals }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Posisi horizontal acak 0-100%
      delay: Math.random() * 5,  // Waktu mulai acak
      duration: 5 + Math.random() * 5, // Kecepatan jatuh acak (antara 5-10 detik)
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh", // Jatuh sampai bawah layar lebih sedikit
            opacity: [0, 1, 0], // Muncul, jelas, lalu hilang
            rotate: 360, // Berputar
            x: [0, 20, -20, 0], // Goyang kiri kanan
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity, // Ulang terus menerus
            delay: petal.delay,
            ease: "linear",
          }}
          // Bentuk kelopak bunga (CSS)
          className="absolute top-0 w-4 h-4 bg-pink-300 rounded-tr-full rounded-bl-full opacity-60"
          style={{ 
            left: `${petal.left}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingPetals;
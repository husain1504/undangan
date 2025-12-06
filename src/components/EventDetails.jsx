import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaClock } from 'react-icons/fa'; // FaCalendarAlt dihapus karena resepsi hilang

const EventDetails = () => {
  // TANGGAL ACARA (Format: YYYY-MM-DDTHH:MM:SS)
  const weddingDate = new Date("2025-12-21T08:00:00").getTime(); // Saya sesuaikan tgl countdown ke tgl 21

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Logika Hitung Mundur
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(interval); // Stop jika waktu sudah lewat
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Komponen Kotak Waktu Kecil
  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center bg-pink-600 text-white p-3 rounded-lg w-16 md:w-20 shadow-lg">
      <span className="text-xl md:text-2xl font-bold">{value}</span>
      <span className="text-xs uppercase">{label}</span>
    </div>
  );

  return (
    <section className="py-20 bg-pink-50 text-center">
      <div className="container mx-auto px-4">
        
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-cursive text-pink-600 mb-10"
        >
          Save The Date
        </motion.h2>

        {/* COUNTDOWN TIMER */}
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.5 }}
           className="flex justify-center gap-3 md:gap-6 mb-16"
        >
          <TimeBox value={timeLeft.days} label="Hari" />
          <TimeBox value={timeLeft.hours} label="Jam" />
          <TimeBox value={timeLeft.minutes} label="Menit" />
          <TimeBox value={timeLeft.seconds} label="Detik" />
        </motion.div>

        {/* KARTU ACARA (Single Item - Centered) */}
        <div className="flex justify-center w-full">
          
          {/* AKAD NIKAH */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-pink-500 w-full max-w-lg"
          >
            <div className="text-4xl text-pink-500 mb-4 flex justify-center"><FaClock /></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Akad Nikah</h3>

            {/* Tambahan kalimat pengantar agar lebih sopan */}
            <p className="text-sm text-gray-500 mb-2 italic">Insya Allah akan diselenggarakan pada:</p>

            <p className="text-gray-800 mb-1 font-bold text-lg">Minggu, 21 Desember 2025</p>
            <p className="text-gray-600">Pukul: 08.00 WIB - Selesai</p>
            
            <div className="my-6 border-b border-gray-200"></div>
            
            {/* Tambahan keterangan tempat */}
            <p className="text-sm text-gray-500 mb-2 italic">Bertempat di:</p>
            <p className="text-gray-800 font-bold text-lg">Masjid Agung Al-Barkah</p>
            <p className="text-gray-500 text-sm">Jl. Veteran No. 45, Kota Bekasi</p>
          </motion.div>

        </div>

        {/* TOMBOL PETA */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <a 
            href="https://goo.gl/maps/contohLinkPeta" // Ganti link gmaps nanti
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition shadow-lg"
          >
            <FaMapMarkedAlt /> Lihat Lokasi Google Maps
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default EventDetails;
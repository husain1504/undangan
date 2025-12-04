import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa'; // Tambahkan import FaHeart

// --- BAGIAN IMPORT FOTO (PENTING) ---
// Pastikan nama file (huruf besar/kecil) SAMA PERSIS dengan di folder
// Tanda '../' artinya mundur satu folder dari components, lalu masuk assets/img
import fotoPria from '../assets/img/Pria.jpg';   
import fotoWanita from '../assets/img/Wanita.jpg'; 

const Couple = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Judul Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cursive text-pink-600 mb-2">Mempelai</h2>
          <p className="text-gray-500 italic">Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan</p>
        </motion.div>

        {/* Bagian Foto Pasangan (Ditambah mb-16 untuk jarak ke quote) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mb-16">
          
          {/* MEMPELAI PRIA (Animasi dari Kiri) */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 bg-pink-200 rounded-full transform rotate-6"></div>
              {/* --- FOTO PRIA --- */}
              <img 
                src={fotoPria} 
                alt="Mempelai Pria" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Ame Putra</h3>
            <p className="text-gray-500 mb-2">Putra Bpk. Ahmad & Ibu Siti</p>
            <a href="#" className="text-pink-500 text-sm hover:underline">@ame_putra</a>
          </motion.div>

          {/* Simbol DAN (&) */}
          <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             transition={{ delay: 0.5, type: "spring" }}
             className="text-5xl font-cursive text-pink-400"
          >
            &
          </motion.div>

          {/* MEMPELAI WANITA (Animasi dari Kanan) */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 bg-pink-200 rounded-full transform -rotate-6"></div>
              {/* --- FOTO WANITA --- */}
              <img 
                src={fotoWanita} 
                alt="Mempelai Wanita" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Ria Nur</h3>
            <p className="text-gray-500 mb-2">Putri Bpk. Budi & Ibu Rina</p>
            <a href="#" className="text-pink-500 text-sm hover:underline">@ria_nur</a>
          </motion.div>

        </div>

        {/* --- BAGIAN QUOTE (Disisipkan di sini, di bawah foto) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-10 px-6 bg-pink-50 text-center rounded-2xl mx-auto max-w-4xl shadow-sm"
        >
          <div className="max-w-2xl mx-auto">
            <FaHeart className="text-3xl text-pink-400 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-700 font-serif italic leading-relaxed">
              "Kita dipertemukan bukan karena kebetulan, tetapi karena semesta merestui doa-doa yang kita panjatkan diam-diam. 
              Sejak saat itu, aku tahu, kamu adalah bagian dari takdir yang telah lama kucari."
            </p>
            <br />
            <p className="text-lg md:text-xl text-pink-600 font-serif font-bold">
              "Hari ini, kita menulis bab baru, kisah cinta yang tak lagi sekadar mimpi, tapi nyata dalam ikatan suci pernikahan."
            </p>
          </div>
        </motion.div>
        {/* --------------------------------------------- */}

      </div>
    </section>
  );
};

export default Couple;
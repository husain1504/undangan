import { motion } from 'framer-motion';
import { FaHeart, FaInstagram } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

// Import foto
import fotoPria from '../assets/img/Pria.jpg';   
import fotoWanita from '../assets/img/Wanita.jpg'; 

const Couple = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-pink-50/30 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- JUDUL SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-2"
          >
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-cursive text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 mb-3">
            Mempelai
          </h2>
          <p className="text-gray-500 italic text-sm md:text-base">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan
          </p>
        </motion.div>

        {/* Bagian Foto Pasangan */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 mb-20">
          
          {/* MEMPELAI PRIA */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-56 h-56 mx-auto mb-8"
            >
              {/* Decorative rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(236, 72, 153, 0.3), transparent)'
                }}
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, transparent, rgba(219, 39, 119, 0.2), transparent)'
                }}
              />
              
              {/* Background gradient */}
              <div className="absolute inset-4 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              
              {/* Photo */}
              <img 
                src={fotoPria} 
                alt="Mempelai Pria" 
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full border-4 border-white shadow-2xl"
              />
              
              {/* Floating hearts */}
              <motion.div
                animate={{ 
                  y: [-5, -15, -5],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 text-pink-500"
              >
                <FaHeart className="w-6 h-6 drop-shadow-lg" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">
                Harmansa Purnanda Utama
              </h3>
              <p className="text-sm text-gray-500 mb-3">Amd. Kep</p>
              <p className="text-gray-600 mb-4 text-sm">
                Putra dari Bpk. Nashar Muhammad., S.pd & ibu Rahmatullah (Almh.)
              </p>
            </motion.div>
          </motion.div>

          {/* Simbol & dengan animasi */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-7xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 drop-shadow-lg"
            >
              &
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-pink-300/20 rounded-full blur-xl -z-10"
            />
          </motion.div>

          {/* MEMPELAI WANITA */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-56 h-56 mx-auto mb-8"
            >
              {/* Decorative rings */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(236, 72, 153, 0.3), transparent)'
                }}
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, transparent, rgba(219, 39, 119, 0.2), transparent)'
                }}
              />
              
              {/* Background gradient */}
              <div className="absolute inset-4 bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 rounded-full transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div>
              
              {/* Photo */}
              <img 
                src={fotoWanita} 
                alt="Mempelai Wanita" 
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-full border-4 border-white shadow-2xl"
              />
              
              {/* Floating hearts */}
              <motion.div
                animate={{ 
                  y: [-5, -15, -5],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-2 -left-2 text-rose-500"
              >
                <FaHeart className="w-6 h-6 drop-shadow-lg" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">
                Padaria Nur
              </h3>
              <p className="text-sm text-gray-500 mb-3">S. Kep., Ners</p>
              <p className="text-gray-600 mb-4 text-sm">
                Putri dari Bpk. Akhmad & ibu Itam
              </p>
              
            </motion.div>
          </motion.div>

        </div>

        {/* Quote Section - Lebih Premium */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative py-12 px-8 md:px-12 bg-gradient-to-br from-white via-pink-50/50 to-white backdrop-blur-sm text-center rounded-3xl mx-auto max-w-4xl shadow-xl border border-pink-100/50 overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-300/50 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pink-300/50 rounded-br-3xl"></div>
            
            {/* Floating particles */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 left-8 w-2 h-2 bg-pink-400 rounded-full"
            />
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-8 right-8 w-2 h-2 bg-rose-400 rounded-full"
            />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaHeart className="text-4xl text-pink-500 mx-auto mb-8 drop-shadow-lg" />
              </motion.div>
              
              <p className="text-lg md:text-xl text-gray-700 font-serif italic leading-relaxed mb-6">
                "Kita dipertemukan bukan karena kebetulan, tetapi karena semesta merestui doa-doa yang kita panjatkan diam-diam. 
                Sejak saat itu, aku tahu, kamu adalah bagian dari takdir yang telah lama kucari."
              </p>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto my-6"></div>
              
              <p className="text-xl md:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600">
                "Hari ini, kita menulis bab baru, kisah cinta yang tak lagi sekadar mimpi, tapi nyata dalam ikatan suci pernikahan."
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Couple;
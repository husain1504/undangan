import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelopeOpenText, FaMusic, FaHeart } from 'react-icons/fa';

import Couple from './components/Couple'; 
import EventDetails from './components/EventDetails';
// import Gallery from './components/Gallery'; 
import RSVP from './components/RSVP';       
import Footer from './components/Footer';
import FallingPetals from './components/FallingPetals'; // 1. IMPORT KOMPONEN BUNGA
import Gift from './components/Gift';

// --- IMPORT MUSIK ---
import musicFile from './assets/bergema.mp3'; 

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Fungsi: Buka Undangan + Putar Lagu
  const openInvitation = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Fungsi: Tombol Pause/Play manual
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-serif italic leading-relaxed">
      
      {/* --- AUDIO PLAYER --- */}
      <audio ref={audioRef} src={musicFile} loop />
      
      {/* Tombol Musik Melayang */}
      {isOpened && (
        <button 
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 bg-pink-600 text-white p-3 rounded-full shadow-lg animate-spin-slow"
        >
          <FaMusic className={isPlaying ? "" : "opacity-50"} />
        </button>
      )}

      {/* --- COVER DEPAN --- */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "-100vh", transition: { duration: 1, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
          >
            <div className="absolute inset-0 opacity-60">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" alt="Bg" className="w-full h-full object-cover"/>
            </div>

            <div className="relative z-10 text-center px-4">
              <p className="tracking-widest mb-2">THE WEDDING OF</p>
              <h1 className="text-6xl font-cursive mb-8 text-pink-200">Hermansah & Ria</h1>
              <button 
                onClick={openInvitation}
                className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-pink-100 transition cursor-pointer"
              >
                <FaEnvelopeOpenText /> Buka Undangan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- KONTEN UTAMA --- */}
      {isOpened && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative" // PENTING: Agar FallingPetals bisa diposisikan absolute
        >
          
          {/* 2. EFEK BUNGA JATUH (Di paling belakang) */}
          <FallingPetals />

          {/* 3. KONTEN DIBUNGKUS z-10 AGAR TIDAK TERTUTUP BUNGA */}
          
          {/* Header Salam */}
          <div className="relative z-10 text-center py-10 px-4">
             <h2 className="text-2xl font-bold text-gray-800">Assalamualaikum Wr. Wb.</h2>
             <p className="text-gray-600 mt-2 max-w-lg mx-auto">
               Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.
             </p>
          </div>

          {/* Komponen Pasangan */}
          <div className="relative z-10">
            <Couple />
          </div>
          
          {/* Waktu & Lokasi */}
          <div className="relative z-10">
            <EventDetails />
          </div>

          {/* Gift */}
          <div className="relative z-10">
            <Gift />
          </div>

          {/* RSVP */}
          <div className="relative z-10">
            <RSVP />
          </div>

          {/* Footer */}
          <div className="relative z-10">
            <Footer />
          </div>

        </motion.div>
      )}

    </div>
  );
}

export default App;
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelopeOpenText, FaMusic, FaHeart } from 'react-icons/fa';
import Couple from './components/Couple'; 
import EventDetails from './components/EventDetails';
// import Gallery from './components/Gallery'; // Kamu menonaktifkan Gallery, jadi biarkan begini
import RSVP from './components/RSVP';       
import Footer from './components/Footer';

// --- IMPORT MUSIK (Pastikan file bergema.mp3 ada di folder src/assets/) ---
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
    <div className="min-h-screen bg-slate-50 font-serif overflow-x-hidden">
      
      {/* --- AUDIO PLAYER --- */}
      {/* Sekarang src mengambil dari file bergema.mp3 yang di-import di atas */}
      <audio ref={audioRef} src={musicFile} loop />
      
      {/* Tombol Musik Melayang (Hanya muncul jika sudah dibuka) */}
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
              <h1 className="text-6xl font-cursive mb-8 text-pink-200">Ame & Ria</h1>
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
        >
          {/* 1. Header Salam */}
          <div className="text-center py-10 px-4">
             <h2 className="text-2xl font-bold text-gray-800">Assalamualaikum Wr. Wb.</h2>
             <p className="text-gray-600 mt-2 max-w-lg mx-auto">
               Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.
             </p>
          </div>

          {/* 2. Komponen Pasangan (Couple) */}
          <Couple />
          
          {/* 3. Waktu & Lokasi */}
            <EventDetails />

          {/* 4. RSVP */}
            <RSVP />

          {/* 6. Footer */}
            <Footer />

        </motion.div>
      )}

    </div>
  );
}

export default App;
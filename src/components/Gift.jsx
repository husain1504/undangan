import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaCheck, FaGift, FaChevronDown, FaChevronUp, FaHome, FaUser, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Gift = () => {
  const [copied, setCopied] = useState(false);
  const [showGift, setShowGift] = useState(false); 

  // --- 1. DATA REKENING (KARTU ATAS) ---
  const bankName = "BRI"; 
  const accountNumber = "4771-0102-6001-534"; // Format display
  const accountNumberPlain = "477101026001534"; // Format copy
  const accountName = "HARMANSA PURNANDA UTAMA"; 

  // --- 2. DATA ALAMAT KIRIM KADO (KARTU BAWAH) ---
  const giftReceiver = "Padaria Nur";
  const giftPhone = "0857-2481-0556";
  const giftAddress = "Labuhan Burung RT 001 RW 002, Dusun Pernang, Kecematan Buer";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumberPlain); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      
      {/* Decorative Background Elements (Blur Blobs) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-32 left-20 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Judul Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-white shadow-lg text-pink-500 mb-6 ring-4 ring-pink-50">
            <FaGift className="text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Wedding Gift</h2>
          <div className="h-1 w-20 bg-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-lg mx-auto text-base leading-relaxed mb-8 font-light">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
            Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowGift(!showGift)}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-white/20"
          >
             <FaGift className="group-hover:rotate-12 transition-transform" />
             <span className="tracking-wide">{showGift ? "Tutup Amplop Digital" : "Kirim Hadiah / Amplop Digital"}</span>
             {showGift ? <FaChevronUp /> : <FaChevronDown />}
          </motion.button>
        </motion.div>

        {/* CONTAINER KARTU */}
        <AnimatePresence>
          {showGift && (
            <motion.div 
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-12 px-2 flex flex-col items-center gap-8"> 
                
                {/* --- KARTU 1: TRANSFER BANK (ATM PREMIUM STYLE) --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="max-w-[400px] w-full aspect-[1.586/1] rounded-3xl shadow-2xl relative overflow-hidden group perspective-1000"
                >
                  {/* Card Background: Platinum Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-300"></div>
                  
                  {/* Texture Pattern (Subtle Noise) */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #000000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/60 to-transparent pointer-events-none"></div>

                  <div className="relative h-full p-6 flex flex-col justify-between z-10">
                    {/* Header: Chip & Logo */}
                    <div className="flex justify-between items-start">
                         {/* Chip Emas Realistis */}
                        <div className="w-12 h-9 bg-gradient-to-tr from-yellow-600 via-yellow-300 to-yellow-100 rounded-md shadow-sm border border-yellow-600/50 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#b45309_2px,#b45309_3px)]"></div>
                            <div className="w-8 h-5 border border-yellow-800/40 rounded-sm relative z-10"></div>
                        </div>
                        {/* Logo BRI */}
                        <div className="flex items-center gap-1">
                             <div className="font-bold italic text-blue-900 text-2xl tracking-tighter drop-shadow-sm">BRI</div>
                        </div>
                    </div>

                    {/* Content: Number & Name */}
                    <div className="text-left pl-1">
                        <div className="flex items-center justify-between gap-2 mb-4">
                            <p className="font-mono text-xl md:text-2xl tracking-widest text-gray-800 font-bold drop-shadow-sm" style={{ letterSpacing: '2px' }}>
                                {accountNumber}
                            </p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-semibold">Card Holder</p>
                                <p className="text-sm font-bold text-gray-700 tracking-widest uppercase">{accountName}</p>
                            </div>
                            
                            {/* Tombol Copy Kecil Elegan */}
                            <button 
                                onClick={handleCopy}
                                className="flex items-center gap-1 px-3 py-1.5 bg-white/50 backdrop-blur-sm border border-white/60 rounded-lg text-xs font-bold text-gray-600 hover:bg-white hover:text-pink-500 transition-all shadow-sm"
                            >
                                {copied ? <FaCheck /> : <FaCopy />}
                                {copied ? "SALIN" : "SALIN"}
                            </button>
                        </div>
                    </div>
                  </div>
                </motion.div>

                {/* --- KARTU 2: ALAMAT KIRIM HADIAH (CLEAN & ELEGANT) --- */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="max-w-[400px] w-full bg-white rounded-3xl shadow-xl border border-gray-100 relative p-8 text-center overflow-hidden"
                >
                   {/* Top Accent Line */}
                   <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400"></div>
                   
                   {/* Icon Home Header */}
                   <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-rose-50 rounded-2xl text-rose-500 shadow-inner">
                      <FaHome className="text-3xl" />
                   </div>
                   
                   <h3 className="text-xl font-bold text-gray-800 mb-1">Alamat Kirim Hadiah</h3>
                   <p className="text-gray-400 text-xs mb-8 uppercase tracking-widest">Shipping Address</p>

                   {/* List Details */}
                   <div className="space-y-5 text-left bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                       
                       <div className="flex items-start gap-4">
                           <div className="mt-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-rose-400 shadow-sm shrink-0"><FaUser className="text-sm" /></div>
                           <div className="flex-1">
                               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Penerima</p>
                               <p className="text-gray-700 font-semibold">{giftReceiver}</p>
                           </div>
                       </div>
                       
                       <div className="w-full h-[1px] bg-gray-200/60"></div>

                       <div className="flex items-start gap-4">
                           <div className="mt-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-rose-400 shadow-sm shrink-0"><FaPhoneAlt className="text-sm" /></div>
                           <div className="flex-1">
                               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">No. HP</p>
                               <p className="text-gray-700 font-semibold tracking-wide">{giftPhone}</p>
                           </div>
                       </div>

                       <div className="w-full h-[1px] bg-gray-200/60"></div>

                       <div className="flex items-start gap-4">
                           <div className="mt-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-rose-400 shadow-sm shrink-0"><FaMapMarkerAlt className="text-sm" /></div>
                           <div className="flex-1">
                               <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Alamat Lengkap</p>
                               <p className="text-gray-700 font-medium leading-relaxed">{giftAddress}</p>
                           </div>
                       </div>
                   </div>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gift;
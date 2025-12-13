import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaCheck, FaGift, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Gift = () => {
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false); // State untuk kartu kedua
  const [showGift, setShowGift] = useState(false); 

  // --- 1. DATA REKENING (KARTU ATAS - BRI) ---
  const bankName1 = "BRI"; 
  const accountNumber1 = "4771-0102-6001-534"; // Format display
  const accountNumberPlain1 = "477101026001534"; // Format copy
  const accountName1 = "HARMANSA PURNANDA UTAMA"; 

  // --- 2. DATA REKENING (KARTU BAWAH - BNI) ---
  // Silakan ganti dengan nomor rekening BNI asli Anda
  const bankName2 = "BNI";
  const accountNumber2 = "976831300"; // GANTI INI
  const accountNumberPlain2 = "976831300"; // GANTI INI
  const accountName2 = "PADARIA NUR"; // GANTI INI (Biasanya mempelai wanita)

  const handleCopy1 = () => {
    navigator.clipboard.writeText(accountNumberPlain1); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText(accountNumberPlain2); 
    setCopied2(true);
    setTimeout(() => setCopied2(false), 2000);
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
                
                {/* --- KARTU 1: BRI (ATM PREMIUM STYLE) --- */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="max-w-[400px] w-full aspect-[1.586/1] rounded-3xl shadow-2xl relative overflow-hidden group perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-300"></div>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #000000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/60 to-transparent pointer-events-none"></div>

                  <div className="relative h-full p-6 flex flex-col justify-between z-10">
                    {/* Header: Chip & Logo */}
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-9 bg-gradient-to-tr from-yellow-600 via-yellow-300 to-yellow-100 rounded-md shadow-sm border border-yellow-600/50 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#b45309_2px,#b45309_3px)]"></div>
                            <div className="w-8 h-5 border border-yellow-800/40 rounded-sm relative z-10"></div>
                        </div>
                        <div className="flex items-center gap-1">
                             <div className="font-bold italic text-blue-900 text-2xl tracking-tighter drop-shadow-sm">{bankName1}</div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-left pl-1">
                        <div className="flex items-center justify-between gap-2 mb-4">
                            <p className="font-mono text-xl md:text-2xl tracking-widest text-gray-800 font-bold drop-shadow-sm" style={{ letterSpacing: '2px' }}>
                                {accountNumber1}
                            </p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-semibold">Card Holder</p>
                                <p className="text-sm font-bold text-gray-700 tracking-widest uppercase">{accountName1}</p>
                            </div>
                            <button 
                                onClick={handleCopy1}
                                className="flex items-center gap-1 px-3 py-1.5 bg-white/50 backdrop-blur-sm border border-white/60 rounded-lg text-xs font-bold text-gray-600 hover:bg-white hover:text-pink-500 transition-all shadow-sm"
                            >
                                {copied ? <FaCheck /> : <FaCopy />}
                                {copied ? "SALIN" : "SALIN"}
                            </button>
                        </div>
                    </div>
                  </div>
                </motion.div>

                {/* --- KARTU 2: BNI (ATM PREMIUM STYLE - KEMBAR) --- */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="max-w-[400px] w-full aspect-[1.586/1] rounded-3xl shadow-2xl relative overflow-hidden group perspective-1000"
                >
                  {/* Card Background: Slightly Teal/Cooler for BNI distinction or keep Platinum */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-teal-50/20 to-gray-300"></div>
                  
                  {/* Texture Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #004d4d 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/60 to-transparent pointer-events-none"></div>

                  <div className="relative h-full p-6 flex flex-col justify-between z-10">
                    {/* Header: Chip & Logo */}
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-9 bg-gradient-to-tr from-yellow-600 via-yellow-300 to-yellow-100 rounded-md shadow-sm border border-yellow-600/50 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#b45309_2px,#b45309_3px)]"></div>
                            <div className="w-8 h-5 border border-yellow-800/40 rounded-sm relative z-10"></div>
                        </div>
                        {/* Logo BNI - Teal Color */}
                        <div className="flex items-center gap-1">
                             <div className="font-bold italic text-teal-600 text-2xl tracking-tighter drop-shadow-sm">{bankName2}</div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-left pl-1">
                        <div className="flex items-center justify-between gap-2 mb-4">
                            <p className="font-mono text-xl md:text-2xl tracking-widest text-gray-800 font-bold drop-shadow-sm" style={{ letterSpacing: '2px' }}>
                                {accountNumber2}
                            </p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1 font-semibold">Card Holder</p>
                                <p className="text-sm font-bold text-gray-700 tracking-widest uppercase">{accountName2}</p>
                            </div>
                            <button 
                                onClick={handleCopy2}
                                className="flex items-center gap-1 px-3 py-1.5 bg-white/50 backdrop-blur-sm border border-white/60 rounded-lg text-xs font-bold text-gray-600 hover:bg-white hover:text-teal-600 transition-all shadow-sm"
                            >
                                {copied2 ? <FaCheck /> : <FaCopy />}
                                {copied2 ? "SALIN" : "SALIN"}
                            </button>
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
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const RSVP = () => {
  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [status, setStatus] = useState("Hadir");

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Mohon isi nama Anda terlebih dahulu.");
      return;
    }

    // --- GANTI NOMOR WA DI SINI (Gunakan format 628...) ---
    const phoneNumber = "6289529405713"; 
    
    // Format Pesan
    const message = `Halo, saya *${name}*.\n\nIngin konfirmasi kehadiran di acara pernikahan Ame & Ria.\n\nStatus: *${status}*\nJumlah Tamu: *${guestCount} orang*\n\nTerima kasih!`;
    
    // Buat Link WA
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Buka di tab baru
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-white-50">
      <div className="container mx-auto px-4 max-w-lg">
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-pink-500"
        >
          <h2 className="text-3xl font-cursive text-center text-pink-600 mb-2">RSVP</h2>
          <p className="text-center text-gray-500 mb-8">
            Mohon konfirmasi kehadiran Anda untuk membantu kami mempersiapkan acara.
          </p>

          <form onSubmit={handleSendMessage} className="space-y-4">
            
            {/* Input Nama */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                placeholder="Contoh: Budi Santoso"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
              />
            </div>

            {/* Input Jumlah Tamu */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">Jumlah Tamu</label>
              <select 
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-pink-500 outline-none"
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
                <option value="3">3 Orang</option>
                <option value="4">4 Orang</option>
              </select>
            </div>

            {/* Input Status Kehadiran */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">Konfirmasi Kehadiran</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="status" 
                    value="Hadir" 
                    checked={status === "Hadir"}
                    onChange={(e) => setStatus(e.target.value)}
                    className="accent-pink-600 w-5 h-5"
                  />
                  <span>Hadir</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="status" 
                    value="Tidak Hadir" 
                    checked={status === "Tidak Hadir"}
                    onChange={(e) => setStatus(e.target.value)}
                    className="accent-gray-500 w-5 h-5"
                  />
                  <span>Maaf, Tidak Bisa</span>
                </label>
              </div>
            </div>

            {/* Tombol Kirim */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-lg mt-4"
            >
              <FaWhatsapp className="text-xl" /> Kirim Konfirmasi via WhatsApp
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default RSVP;
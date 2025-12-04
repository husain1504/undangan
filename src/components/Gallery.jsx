import { motion } from 'framer-motion';

const Gallery = () => {
  // Daftar URL Foto (Ganti dengan foto aslimu nanti)
  const photos = [
    "https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=2076&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=2073&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1974&auto=format&fit=crop",
  ];

  // Variabel Animasi
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Jeda antar foto 0.2 detik
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-cursive text-pink-600 mb-4"
        >
          Galeri Kebahagiaan
        </motion.h2>
        
        <p className="text-gray-500 mb-12 max-w-lg mx-auto">
          Momen-momen indah yang kami abadikan sebelum melangkah ke jenjang pernikahan.
        </p>

        {/* GRID FOTO */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} // Animasi hanya sekali saat di-scroll
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {photos.map((photo, index) => (
            <motion.div 
              key={index} 
              variants={itemVars}
              className="overflow-hidden rounded-xl shadow-lg relative group h-64"
            >
              <img 
                src={photo} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay saat di-hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-bold tracking-widest">
                  ❤️ LOVE
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;
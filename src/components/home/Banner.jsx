import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section className="relative text-white text-center flex h-[500px] lg:h-auto items-center justify-center px-2 lg:py-16 lg:px-6 sm:px-12 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
      >
        <source src="/ikis_light_short.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 bg-gray-700 opacity-90 rounded-lg lg:max-w-[80%] p-5 pb-9"
      >
        <motion.h2
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-lg"
        >
          Революция в осветителния дизайн
        </motion.h2>
        <motion.p
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-md md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto drop-shadow-md"
        >
          Открийте нашата иновативна платформа, предназначена за архитекти,
          инженери, интериорни дизайнери и крайни потребители, за лесно
          намиране на перфектните осветителни решения сAI помощ за визуално
          търсене и персонализирани препоръки.
        </motion.p>
        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white text-gray-700 hover:scale-105 py-2 px-4 rounded-lg font-semibold"
        >
          Научете повече
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Banner

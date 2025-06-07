'use client'

import { motion } from 'framer-motion'

export default function Biography() {
  return (
    <div className="text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-3xl font-bold sm:text-4xl"
      >
        Biography
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-300"
      >
        Hey there! 👋 I&apos;m driven by a buzzing curiosity 🤔 and often find myself looking at things from a fresh angle, not always sticking to the usual paths. It feels like I&apos;ve been on a lifelong adventure of learning, soaking up new stuff every day. There&apos;s this restless spirit ✨ in me, always chasing answers and trying to connect the dots between things that seem totally unrelated. To me, it&apos;s all part of building a unique personal picture!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-lg text-gray-300"
      >
        My studies have taken me through some cool areas:
        <ul className="list-none mt-2 ml-4 space-y-2">
          <li>💻 Technology in Systems</li>
          <li>🚜🌾 Agricultural Engineering from the National University of Colombia</li>
          <li>📈 Specialization in Preparation and Evaluation of Private Projects</li>
          <li>📋 Master&apos;s degree in Project Management</li>
          <li>⚖️ Specialist in State Contracting</li>
        </ul>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-lg text-gray-300"
      >
        As a kid, I dreamed of flying planes ✈️, and actually studying aviation felt like making that dream come true! At the same time, tech stuff has always grabbed my attention, pushing me to stay updated. Systems were more of a fun hobby back then. And guess what? Finance 💰 has been a huge passion since university. I dove into the complexities of the Colombian Stock Exchange and later explored broader investments with brokers. I was always grabbing virtual courses and teaching myself about macroeconomic theories 🌎📊, technical analysis 📈📉, indicators, and pretty much anything I could get my hands on! 📚
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-lg text-gray-300"
      >
        Then came Blockchain technology and Crypto ecosystems ₿🔗, and WOW, did they shake things up! It felt like all my interests – tech, coding, finance, even how it could apply to agriculture – suddenly clicked together. And NFTs 🖼️💡? They totally opened up a new world of possibilities on the blockchain, blending things like art and technology that used to seem miles apart.
      </motion.p>
    </div>
  )
} 
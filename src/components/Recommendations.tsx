'use client'

import { motion } from 'framer-motion'

const recommendations = [
  {
    text: "Ahmed is hands-down one of the smartest individuals I have ever worked with! Honestly I was a little intimidated when first engaging with Ahmed because his mind works so fast and on a completely different level than most. However, once we were able to spend some time diving deep into his concepts and their applications, it was truly mind blowing. Ahmed is able to conceptualize relationships between data sets and turn that data into stunning visualizations that tell compelling stories and drive action. Ahmed's energy and passion for data is contagious and inspirational. If I was in need of a data scientist to get surgical with my data from triage, diagnosis, to action, and follow-up, Ahmed would be my go-to!",
    author: "Adam Nichols",
    title: "Values-driven, customer-focused servant leader",
    date: "December 18, 2023",
    relationship: "Adam was senior to Ahmed but didn't manage Ahmed directly"
  }
]

export default function Recommendations() {
  return (
    <section id="recommendations" className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Recommendations
        </motion.h2>

        <div className="mt-12 grid gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg bg-gray-900 p-8"
            >
              <div className="flex flex-col gap-4">
                <p className="text-lg text-gray-300 italic">"{rec.text}"</p>
                <div className="mt-4">
                  <p className="font-semibold text-white">{rec.author}</p>
                  <p className="text-gray-400">{rec.title}</p>
                  <p className="mt-2 text-sm text-gray-500">{rec.date}</p>
                  <p className="text-sm text-gray-500">{rec.relationship}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
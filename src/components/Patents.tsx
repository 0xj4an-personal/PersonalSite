'use client'

import { motion } from 'framer-motion'

const patents = [
  {
    id: 'US20250071022A1',
    title: 'Management of application programming interfaces for microservices of network functions',
    description: 'Technologies for facilitating APIs for microservices associated with a communications network are disclosed.',
  },
  {
    id: 'US20240127237A1',
    title: 'Managing customer information and transaction records on a distributed ledger',
    description: 'Systems and methods for using a distributed ledger to maintain a blockchain are provided.',
  },
  {
    id: 'US20240378557A1',
    title: 'Digital document and network management (DDMS)',
    description: 'Digital document and network management (DDMS) system includes digitizing a document into a standard digital format.',
  },
  {
    id: 'US20240243931A1',
    title: 'Edge blockchain authentication',
    description: 'Edge blockchain authentication for communications networks is disclosed.',
  },
]

export default function Patents() {
  return (
    <section id="patents" className="min-h-screen bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Patents
        </motion.h2>

        <div className="mt-12 grid gap-8">
          {patents.map((patent) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg bg-gray-900 p-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">{patent.title}</h3>
                <p className="text-sm text-gray-400">{patent.id}</p>
                <p className="text-gray-300">{patent.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  color: string
  gradient?: string
}

export default function Modal({ isOpen, onClose, children, color, gradient }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl z-50"
            style={{
              background: gradient || color,
              border: `2px solid ${color}`,
            }}
          >
            <div className="relative bg-black bg-opacity-80 p-8 rounded-lg">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
              >
                ×
              </button>
              <div className="text-white">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 
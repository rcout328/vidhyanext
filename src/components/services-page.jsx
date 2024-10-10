"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useRef } from "react"

const services = [
  {
    id: "01",
    title: "CONSULTING",
    description: "Borrow Our Minds, Validate Your Ideas, See if Devflow is the Right Fit",
  },
  {
    id: "02",
    title: "DEVELOPMENT",
    description: "Website Development, No-Code Platforms, CMS Implementation, Enterprise Platform Migration",
  },
  {
    id: "03",
    title: "VISUAL DESIGN",
    description: "Marketing Websites, No-Code Products, Design Systems",
  },
]

export function ServicesPage() {
  const [hoveredService, setHoveredService] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen bg-[#5038BC] text-white p-8 relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
        {[...Array(144)].map((_, i) => (
          <motion.div 
            key={i} 
            className="border-[0.5px] border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.01 }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left column */}
          <motion.div 
            className="lg:w-1/3 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <motion.h2
              className="text-6xl font-bold mb-8"
              variants={itemVariants}
            >
              SERVICES
            </motion.h2>
            <motion.div
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
              variants={itemVariants}
            >
              <img
                src="https://cdn.leonardo.ai/users/5ade5a1e-6a85-4754-bc1b-5d2a113caee4/generations/1c2880f1-2b86-43e5-95bb-045c3c26ca3e/Leonardo_Phoenix_A_sleek_modern_laptop_on_a_minimalist_desk_wi_1.jpg"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#84F729]/30 to-[#5038BC]/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div 
            className="lg:w-2/3 lg:pl-12"
            variants={itemVariants}
          >
            <motion.h1
              className="text-7xl lg:text-9xl font-bold mb-12"
              variants={itemVariants}
            >
              Our services
            </motion.h1>
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex items-start">
                    <motion.span 
                      className="text-2xl font-bold mr-4 text-[#84F729]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {service.id}
                    </motion.span>
                    <div>
                      <motion.h3
                        className="text-3xl font-bold mb-2 group-hover:text-[#84F729] transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-lg text-white/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        {service.description}
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: hoveredService === service.id ? 1 : 0,
                        x: hoveredService === service.id ? 0 : -10
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="ml-4" />
                    </motion.div>
                  </div>
                  <motion.div
                    className="h-px bg-white/20 mt-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredService === service.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
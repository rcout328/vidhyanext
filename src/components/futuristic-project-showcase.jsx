"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ExternalLink, ChevronRight } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "Space Oracle",
    description: "A futuristic real estate platform for finding your perfect space.",
    websiteUrl: "https://space-oracle.vercel.app/"
  },
  {
    id: "02",
    title: "WKND Bakes",
    description: "Indulge in heavenly cakes and baked goods for any occasion.",
    websiteUrl: "https://www.wkndbakes.in/"
  },
]

export function FuturisticProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen bg-[#5038BC] text-white p-6 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-white/10" />
        ))}
      </div>
      
      {/* Background gradient */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#84F729] to-[#5038BC] rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y, opacity }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#84F729] rounded-full"
            initial={{ 
              x: Math.random() * windowSize.width, 
              y: Math.random() * windowSize.height 
            }}
            animate={{
              y: [0, windowSize.height],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-6xl font-bold mb-16 text-center"
          variants={itemVariants}
        >
          Futuristic Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src={project.websiteUrl}
                  title={project.title}
                  className="w-full h-full border-0"
                  style={{ transform: "scale(0.75)", transformOrigin: "0 0", width: "133.33%", height: "133.33%" }}
                />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold mb-4"
                whileHover={{ scale: 1.05, color: "#84F729" }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-lg text-white/80 mb-6"
                variants={itemVariants}
              >
                {project.description}
              </motion.p>
              <motion.a
                href={project.websiteUrl}
                className="inline-flex items-center text-[#84F729] hover:text-white transition-colors duration-300"
                whileHover={{ x: 10 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">Visit Website</span>
                <motion.div
                  animate={{
                    x: hoveredProject === project.id ? 5 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink size={20} />
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Futuristic decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#84F729]/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#84F729]/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      {/* Animated chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronRight size={32} className="text-[#84F729] rotate-90" />
      </motion.div>
    </motion.div>
  )
}
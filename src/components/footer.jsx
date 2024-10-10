"use client";
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Facebook, Twitter, Instagram, ChevronRight } from "lucide-react"

const footerLinks = [
  {
    title: "Company",
    links: ["About us", "Testimonials"],
  },
  {
    title: "Blog",
    links: ["Careers", "Our Work", "Reviews"],
  },
  {
    title: "Office",
    address: ["120 N Gould ST STE 3000", "Sheridan WY 9200"],
  },
]

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
]

export function FooterComponent() {
  const [hoveredLink, setHoveredLink] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-[#5038BC] text-white p-8 relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
        {[...Array(144)].map((_, i) => (
          <motion.div 
            key={i} 
            className="border-[0.5px] border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.005 }}
          />
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Let's build experiences
            </motion.h2>
            <motion.div
              className="text-2xl font-light"
              variants={itemVariants}
            >
              VidhyaNext
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex items-center justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="text-2xl md:text-4xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              hello@vidhyanext.com
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {footerLinks.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <motion.h3
                className="text-xl font-semibold mb-4"
                variants={itemVariants}
              >
                {section.title}
              </motion.h3>
              <ul>
                {section.links ? (
                  section.links.map((link) => (
                    <motion.li
                      key={link}
                      className="mb-2"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href="#"
                        className="text-white/80 hover:text-[#84F729] transition-colors duration-300 flex items-center"
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span>{link}</span>
                        <ChevronRight 
                          className={`ml-2 transition-opacity duration-300 ${
                            hoveredLink === link ? "opacity-100" : "opacity-0"
                          }`} 
                          size={16} 
                        />
                      </a>
                    </motion.li>
                  ))
                ) : (
                  section.address?.map((line) => (
                    <motion.li
                      key={line}
                      className="mb-2 text-white/80"
                      variants={itemVariants}
                    >
                      {line}
                    </motion.li>
                  ))
                )}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8"
          variants={containerVariants}
        >
          <motion.div
            className="text-sm text-white/60 mb-4 md:mb-0"
            variants={itemVariants}
          >
            All rights reserved. VidhyaNext
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
            variants={containerVariants}
          >
            <motion.div
              className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.div>
            <motion.div
              className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.div>
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
            >
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-white/60 hover:text-[#84F729] transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stylized 3D shape */}
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-[#84F729] rounded-full opacity-10"
        initial={{ scale: 0, x: -100, y: 100 }}
        animate={{ scale: 1, x: -80, y: 80 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      />
    </motion.footer>
  );
}
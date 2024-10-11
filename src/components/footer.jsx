"use client";
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Linkedin, Instagram, ChevronRight, Mail } from "lucide-react"
import { Link as ScrollLink } from 'react-scroll'

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", to: "home" },
      { name: "Services", to: "services" },
      { name: "Our Work", to: "futuristic-projects" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Contact Us", href: "mailto:work.varunisrani@gmail.com" },
    ],
  },
  {
    title: "Office",
    address: [
      "101, Optimize Elegance,",
      "Sarkhej - Gandhinagar Hwy,",
      "Thaltej, Ahmedabad 380059"
    ],
  },
]

const socialIcons = [
  { Icon: Linkedin, href: "https://www.linkedin.com/in/varun-israni-a21022261/" },
  { Icon: Instagram, href: "https://www.instagram.com/varun.isranii/" },
  { Icon: Mail, href: "mailto:work.varunisrani@gmail.com" },
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
              Let&apos;s build experiences
            </motion.h2>
            <motion.a
              href="mailto:work.varunisrani@gmail.com"
              className="text-2xl font-light hover:text-[#84F729] transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              Start a project
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex items-center justify-end"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:work.varunisrani@gmail.com"
              className="text-2xl md:text-4xl font-bold hover:text-[#84F729] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              work.varunisrani@gmail.com
            </motion.a>
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
                      key={link.name}
                      className="mb-2"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      {link.to ? (
                        <ScrollLink
                          to={link.to}
                          smooth={true}
                          duration={500}
                          className="text-white/80 hover:text-[#84F729] transition-colors duration-300 flex items-center cursor-pointer"
                          onMouseEnter={() => setHoveredLink(link.name)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <span>{link.name}</span>
                          <ChevronRight 
                            className={`ml-2 transition-opacity duration-300 ${
                              hoveredLink === link.name ? "opacity-100" : "opacity-0"
                            }`} 
                            size={16} 
                          />
                        </ScrollLink>
                      ) : (
                        <a
                          href={link.href}
                          className="text-white/80 hover:text-[#84F729] transition-colors duration-300 flex items-center"
                          onMouseEnter={() => setHoveredLink(link.name)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <span>{link.name}</span>
                          <ChevronRight 
                            className={`ml-2 transition-opacity duration-300 ${
                              hoveredLink === link.name ? "opacity-100" : "opacity-0"
                            }`} 
                            size={16} 
                          />
                        </a>
                      )}
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
                  target="_blank"
                  rel="noopener noreferrer"
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
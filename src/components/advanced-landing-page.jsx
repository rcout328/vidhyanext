"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, MessageCircle } from "lucide-react"
import { ServicesPage } from "./services-page"
import { FooterComponent } from "./footer"
import { FuturisticProjectShowcase } from "./futuristic-project-showcase"
import { CustomCursor } from "./custom-cursor"

export function AdvancedLandingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="bg-[#5038BC] text-white relative overflow-hidden">
      <CustomCursor />
      <motion.div
        style={{ opacity, scale }}
        className="min-h-screen p-6 relative"
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
        {/* Header */}
        <header className="flex justify-between items-center mb-12 relative z-10 ml-10">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            VidhyaNext
          </motion.h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="text-black border-white hover:text-[#5038BC] transition-colors duration-300"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              CHAT WITH TASZA
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 transition-colors duration-300"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>
        {/* Main content */}
        <main className="flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-32 relative z-10 ml-10">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="text-[12rem] lg:text-[18rem] font-bold text-white/10 absolute -top-20 -left-4"
                animate={{ 
                  skew: [12, -12, 12],
                  rotateZ: [0, 5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                VI
              </motion.div>
              <div className="text-[9rem] lg:text-[15rem] font-bold">
                <motion.div
                  className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#84F729] to-[#FF00FF]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  NEXT
                </motion.div>
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-clip-text text-transparent bg-gradient-to-r from-[#84F729] to-[#FF00FF] opacity-50 blur-sm"
                  animate={{
                    x: [0, 10, 0],
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  NEXT
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              Your design <motion.span 
                className="text-[#84F729] inline-block"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                +
              </motion.span> development partner.
            </h2>
            <p className="text-2xl opacity-80">
              Hire our team of developers and designers for short-term, recurring, and full-time work.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                className="bg-[#84F729] hover:bg-[#9AFF4D] text-[#5038BC] font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                LET&apos;S TALK
              </Button>
            </motion.div>
          </motion.div>
        </main>
        {/* Footer */}
        <motion.footer
          className="absolute bottom-6 right-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="8" r="1" fill="currentColor" />
          </svg>
        </motion.footer>
      </motion.div>
      <div className="mt-10">
        <ServicesPage />
      </div>
      <div className="mt-10">
        <FuturisticProjectShowcase />
      </div>
      <div className="mt-10">
        <FooterComponent />
      </div>
    </div>
  );
}
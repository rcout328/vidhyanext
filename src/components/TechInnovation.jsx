import { motion } from "framer-motion";

const TechInnovation = () => {
  return (
    <motion.div 
      className="flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-10 bg-black text-white overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 grid-rows-1 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-white/10" />
        ))}
      </div>

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#84F729]/10 via-transparent to-[#84F729]/10"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10,
          ease: "linear",
        }}
      />

      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-row items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 relative z-10 px-2 sm:px-4">
        <motion.span 
          className="font-light whitespace-nowrap"
          whileHover={{ scale: 1.05, color: "#84F729" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          innovate
        </motion.span>
        <motion.span 
          className="text-[#84F729]"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          ⚡
        </motion.span>
        <motion.span 
          className="font-bold text-[#84F729] whitespace-nowrap"
          whileHover={{ scale: 1.05, color: "white" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          tech
        </motion.span>
        <motion.span 
          className="text-[#84F729]"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          ⚡
        </motion.span>
        <motion.span 
          className="font-light whitespace-nowrap"
          whileHover={{ scale: 1.05, color: "#84F729" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          future
        </motion.span>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-[#84F729] opacity-50"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-[#84F729] opacity-50"
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#84F729] rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
    </motion.div>
  );
};

export default TechInnovation;
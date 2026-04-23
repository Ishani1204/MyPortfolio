import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      {/* TEXT SECTION */}
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915eff]">Ishani</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Machine Learning Models.
          </p>
        </div>
      </div> 

      {/* 3D CANVAS */}
      <ComputersCanvas />  

      {/* 🔥 SCROLL INDICATOR WITH GLOW + PULSE */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-0 translate-y-1 z-10">
        <a href="#about" className="cursor-pointer">
          
          <div className="
            relative
            w-[28px] h-[50px]
            rounded-3xl
            border-2 border-[#915eff]
            flex justify-center items-start p-2
            shadow-[0_0_15px_#915eff]
          ">

            {/* ✨ Outer Pulse Ring */}
            <span className="
              absolute inset-0 rounded-3xl
              animate-ping
              bg-[#915eff]/20
            "></span>

            {/* 🟣 Moving Dot */}
            <motion.div 
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#915eff] mb-1 z-10"
            />

          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero;
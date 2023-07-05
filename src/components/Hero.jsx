/**
 * @ Author: Adam Zhang
 * @ Create Time: 2023-02-27 10:41:02
 * @ Modified by: Your name
 * @ Modified time: 2023-07-04 15:58:19
 * @ Description: the hero section of the portfolio, below the navbar
 * the computer 3d image is also added here
 */


import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    // creating我们的背景图
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Adam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            In my day job, I design data pipeline and geo-database for digital agriculture within Canada. <br className='sm:block hidden' />
          </p>
          {/* empty line here */}
          <p></p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Are you in need of a skilled freelancer for your data pipeline? Look no further!
            I am open for freelance work and ready to tackle any challenge you throw my way.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
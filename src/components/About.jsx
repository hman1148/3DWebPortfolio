import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';



const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[250px] shadow-card'
      >
        <div options= {{
          max: 45, 
          scale: 1, 
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    <p>{title}</p>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div> varients={textVariant()}
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I am a student at Utah State University studying Computer Science. I am skilled 
      in Node.js, React.js, MongoDB, Java, Python, and many other languages! I enjoy writing algorithms
      and designing data structures for all of my personal projects! I am always excited to learn new technologies 
      that can improve my current coding practices and that can impact others for good! I'd love to get to know you and you're company
      to begin changing the future!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map(( service, index) => {
        <ServiceCard key={service.title} index={index} {...service}/>
      })}
    </div>
    </>
  )
}

// use a higher order component to align our sections properly
export default SectionWrapper(About, "about");
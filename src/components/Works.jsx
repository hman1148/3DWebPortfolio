import { Tilt } from "react-tilt"
import {motion} from "framer-motion";
import { styles } from "../style";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>


    <div className="w-full flex">
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        These are the following projects that I have done. 
      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {/* {projects.map((project, index) => ())} */}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "");
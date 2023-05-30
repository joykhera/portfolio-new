import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Technologies = () => {
  return (
    <motion.div className='flex flex-row flex-wrap justify-center gap-10 h-screen max-xs:h-96' variants={fadeIn("", "", 0.1, 2)}>
      <BallCanvas />
    </motion.div>
  );
};

export default SectionWrapper(Technologies, "technologies");
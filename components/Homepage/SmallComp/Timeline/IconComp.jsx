import React from "react";

import { motion } from "framer-motion";

const IconComp = ({ Icon, className }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Icon className={`w-[20px] h-[20px] text-text-gray ${className}`} />
    </motion.div>
  );
};

export default IconComp;

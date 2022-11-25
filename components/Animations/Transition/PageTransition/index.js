import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const DivTransition = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const PageTransition = ({ children, delay = 0 }) => (
  <DivTransition
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 10, opacity: 0 }}
    transition={{ duration: 0.8, delay }}
    mb={5}
  >
    {children}
  </DivTransition>
);

export default PageTransition;

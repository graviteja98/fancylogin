import React, { useState } from "react";
import SIDE_NAV from "./SIDE_NAV";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/system";
import TOP_NAV from "./TOP_NAV";
import { useMediaQuery } from "@mui/material";

function Layout(props) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [isOpen, setIsOpen] = useState(false);
  console.log("🚀 ~ file: Layout.js:12 ~ Layout ~ isOpen:", isOpen);

  return (
    <>
      <motion.div>
        <Box
          sx={{
            ml: isSmallScreen ? 0 : "12%",
            mb: 0,
          }}
        >
          <TOP_NAV vis={isSmallScreen} setO={setIsOpen} />
        </Box>
      </motion.div>
   
      {isSmallScreen ? (
        isOpen ? (
          <AnimatePresence>
          { isOpen && <motion.div
          initial={{
            opacity : 0,
            x : -10
          }}
          animate={{
       opacity : 1,
       x : 0
          }}
     
          >
            <SIDE_NAV vis={isSmallScreen} />
          </motion.div>}
          </AnimatePresence>
        ) : (
          ""
        )
      ) : (
        <motion.div
        >
        <SIDE_NAV vis={isSmallScreen} />
      </motion.div>
      )}
 
      <Box
        sx={{
          ml: isSmallScreen ? 0 : "12%",
        }}
      >
        {props.children}
      </Box>
    </>
  );
}

export default Layout;

import React from "react";
//import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { motion } from 'framer-motion'
function SIDE_NAV(props) {
  const list = ["Home", "Profile", "Settings", "Exit"];
  return (
    <motion.div
    >
      <Box
      sx={{
        backgroundColor: props.vis ? "rgba(10,10,10,0.5)" : "rgba(10,10,10,1)",
        width: props.vis ? '35%' :'12%',
        zIndex: 100,
        position: "fixed",
        top : 0,
        left: 0,
        bottom : 0,
        pt : 15,
      }}
    >
      <Stack
      sx={{
        p : 2,
      }}
      direction={'column'}
      spacing={10}
      >
        {list.map((item) => (
          <Typography variant="h4" key={item}color={'whitesmoke'}>{item}</Typography>
        ))}
      </Stack>
    </Box>
    </motion.div>

  );
}

export default SIDE_NAV;

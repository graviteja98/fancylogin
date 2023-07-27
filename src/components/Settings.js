import { Card,  Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
function Settings() {
  return (
  <>
  <Box sx={{
    height : '100vh',
    display  : "flex",
    flexDirection : 'column',
    width : '100%'
  }}>
  <Typography variant='h2' sx={{backgroundColor : 'gray'}}>
    Settings
  </Typography>
  <Box sx={{
   m : 4
  }}>
<Typography variant='h4'>App Settings</Typography>
  </Box>
<Box>
<Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <SkipNextIcon /> 
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
         <SkipPreviousIcon /> 
          </IconButton>
        </Box>
      </Box>
      <motion.div
      style={{
        overflow: "hidden",
        width: "151px", // Set the width to match the CardMedia component's size
        height: "auto", // Set height to "auto" or a specific value based on the aspect ratio of the image
      }}
      initial={{
        opacity: 0,
        scale: 0,
        x: "-10vw",
        y: "-10vh",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt="Live from space album cover"
      />
    </motion.div>
    </Card>

</Box>
  </Box>
  </>
  )
}

export default Settings
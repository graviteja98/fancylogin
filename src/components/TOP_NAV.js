import { Avatar, Typography } from '@mui/material';
import { Box} from '@mui/system';
import React, { useState } from 'react'
import { Button } from "@mui/material";
import { Divide as Hamburger } from 'hamburger-react'
function TOP_NAV(props) {
 
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = ()=>{
setIsOpen(!isOpen)
props.setO(!isOpen)
  }
  return (
    <>
     <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.5)",
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width: '100%',
        zIndex: 100,
        position: "fixed",
        top : 0,
        left: props.vis  ? 0 : '12%',
        p : 4,
        height : 40
      }}
    >
         
<Typography
variant='h3'
color={'whitesmoke'}
>My Website</Typography>
<Avatar
sx={{
  m : 3
}}
/>
{props.vis && <Button variant="outlined" onClick={handleToggle}sx={{
          zIndex : 200,
          color : 'white',
          position : 'relative',
        right : 0,
        }} >
          <Hamburger toggled={isOpen}/>
        </Button>}
      </Box>
    </>
  )
}

export default TOP_NAV
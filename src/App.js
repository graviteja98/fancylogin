import logo from './logo.svg';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion' 
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import CircularProg from './components/CircularProg';
function App() {
  const [state , setState] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },3000)
  })
  return (
    <>
   
    {!state && <motion.div className="App"
    initial={{
      y : '-100vh'
    }}
    animate={{
      y : 0
    }}
    transition={{
      type : 'tween',
      duration : 0.5 ,
      ease : 'easeOut',
    }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </motion.div>}
    <AnimatePresence>
   { state && <motion.div
    initial = {{
      opacity : 0
    }}
    animate = {{
    opacity : 1  
    }}
    exit={{
      opacity : 0
    }}
    >
      <Box
      sx={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
mt : '20%'
      }}
      >
        <Typography variant='h1'>Loading</Typography> 
     <CircularProg/>
      </Box>
     
    </motion.div> }
    </AnimatePresence>
    </>
  );
}

export default App;

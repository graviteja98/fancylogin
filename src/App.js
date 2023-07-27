import logo from './logo.svg';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion' 
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import CircularProg from './components/CircularProg';
import Layout from './components/Layout';
function App() {
  const [state , setState] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },3000)
  })
  return (
    <>
    <Layout>
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
      <h2>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore similique ullam quasi, beatae debitis non dolore dicta veniam voluptates repellendus doloremque error minima nemo eligendi ab aliquid esse aut impedit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ratione sunt! Odio labore dicta repudiandae ab repellat recusandae, est asperiores distinctio perferendis nisi.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sapiente soluta minus eveniet, laborum ipsum dicta exercitationem officia, quidem, laudantium dolores fuga consequuntur! Quidem totam perspiciatis veritatis tenetur ut asperiores.
      Et debitis velit ea voluptatum sequi obcaecati veniam quas autem doloribus? Sit odio, dolore fuga similique sapiente ipsam culpa quasi eum, velit maxime labore corporis, itaque suscipit perferendis recusandae impedit?
      Eius placeat voluptatibus vero fugiat dolorem ea dolor nam necessitatibus in excepturi rerum repudiandae, dolore soluta voluptatum esse dicta molestias nostrum, modi mollitia voluptatem? Esse, sunt beatae. Quis, nihil quam.
      </h2>
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
        mt : '20%',
        width : '100vw'
      }}
      >
        <Typography variant='h1'>Loading</Typography> 
     <CircularProg/>
      </Box>
     
    </motion.div> }
    </AnimatePresence>
    </Layout>
    </>
  );
}

export default App;

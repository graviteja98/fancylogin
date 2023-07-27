import logo from './logo.svg';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion' 
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import CircularProg  from './components/CircularProg';
import React, { Suspense } from "react";
import {Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"));
const Profile = React.lazy(() => import("./components/Profile"));
const Settings = React.lazy(() => import("./components/Settings"));




function App() {
  const [state , setState] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setState(false)
    },3000)
  })

  return (
    <>
      {/* Routes */}
      <Suspense fallback={<CircularProg />}>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

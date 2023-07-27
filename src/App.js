import logo from "./logo.svg";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";
import CircularProg from "./components/CircularProg";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Box } from "@mui/system";
const Home = React.lazy(() => import("./components/Home"));
const Profile = React.lazy(() => import("./components/Profile"));
const Settings = React.lazy(() => import("./components/Settings"));
// import Home from "./components/Home";
// import Profile from "./components/Profile";
// import { Settings } from "@mui/icons-material";

function App() {
  const [state, setState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 3000);
  });

  return (
    <>
      {/* Routes */}
      <BrowserRouter>
      {/* <Suspense fallback={<Box sx={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : "center",
        mt : '12%'
      }}><CircularProg/></Box>}> */}
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;

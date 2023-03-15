import "./style.css";
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from './menuDrawer.jsx';
//import {  } from '@material-ui/core';

// TODO:
// add in logo to top (still clickable)?
// clean up code + css

function Header () {
  const [isLayout, setLayout] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setLayout(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

    return (
      <>
    <Stack direction="row" className="App-header">
      <header >
        <a href="/" className="header" >
        AW
        </a>
      </header>
  {isLayout ? (
    <Stack direction="row" className="menu-items" spacing={4}>
      <div>
        <a href="/AboutMe" className="header-tag">
         About Me 
        </a>
      </div>
      <div>
        <a href="/ExperienceAndSkills" className="header-tag">
         Experience And Skills 
        </a>
      </div >
      <div>
        <a href="/Projects" className="header-tag">
           Projects 
        </a>
      </div>
      <div>
        <a href="/ContactInfo" className="header-tag">
           Contact 
        </a>
      </div>
      </Stack>
  ) : (
      <Stack direction="row" className="menu-items" spacing={2}>
            <MenuDrawer />
      </Stack>
  )}
      </Stack>
      </>
  );
};

export default Header;
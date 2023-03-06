import "./style.css";
import React from 'react';
import Stack from '@mui/material/Stack';

function Header () {
  return (
    <Stack direction="row" className="App-header">
      <header className="header">
        <a href="/">
        Header
        </a>
      </header>

    <Stack direction="row" className="menu-items">
      <div>
        <a href="/AboutMe">
          About Me
        </a>
      </div>
      <div>
        <a href="/ExperienceAndSkills">
        Experience And Skills
        </a>
      </div >
      <div>
        <a href="/Projects">
          Projects
        </a>
      </div>
      <div>
        <a href="/ContactInfo">
          Contact Info
        </a>
      </div>
    </Stack>
      
    </Stack>
  );
}

export default Header;
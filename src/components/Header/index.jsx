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
        <a href="/PageOne">
          Item 1
        </a>
      </div>
      <div>
        <a href="/PageTwo">
          Item 2
        </a>
      </div >
      <div>
        <a href="/PageThree">
          Item 3
        </a>
      </div>
      <div>
        <a href="/PageFour">
          Item 4
        </a>
      </div>
    </Stack>
      
    </Stack>
  );
}

export default Header;
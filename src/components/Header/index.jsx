import "./style.css";
import React from 'react';
import Stack from '@mui/material/Stack';

function Header () {
  return (
    <Stack direction="row" className="App-header">
      <header className="header">
        Header
      </header>

    <Stack direction="row" className="menu-items">
      <div>
        <a>
          Item 1
        </a>
      </div>
      <div>
        <a>
          Item 2
        </a>
      </div>
      <div>
        Item 3
      </div>
      <div>
        Item 4
      </div>
    </Stack>
      
    </Stack>
  );
}

export default Header;
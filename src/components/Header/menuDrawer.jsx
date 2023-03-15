import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';

// TODO:
// clean up code + css

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="header-list"
    >
      <List >
        <a href="/" className="header-home-tag">
        Home
        </a>
      </List>
      <List>
        <a href="/AboutMe" className="header-tag">
        About Me
        </a>
      </List>
      <List>
        <a href="/ExperienceAndSkills" className="header-tag">
        Experience And Skills
        </a>
      </List>
      <List>
        <a href="/Projects" className="header-tag">
        Projects
        </a>
      </List>
      <List >
        <a href="/ContactInfo" className="header-tag">
        Contact
        </a>
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon className="header-icon" fontSize="large" onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <SwipeableDrawer
              PaperProps={{
                sx: {
                  backgroundColor: "#282c34;",
                  padding: '15px'
                }
              }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
           
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

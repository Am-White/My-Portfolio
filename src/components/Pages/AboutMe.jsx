//import "./style.css";
import React, { useState, useEffect } from 'react';
import "./style.css";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Img from '../../files/ame.png';

// TODO:
// write bio
// figure out two links (same effects as home link)
// change image?
// on sm and xs screen sizes (change layout)
// make name overlay image

function AboutMe () {
  const [isLayout, setLayout] = useState(window.innerWidth > 950);

  const updateMedia = () => {
    setLayout(window.innerWidth > 950);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  console.log('hello world, i am...');

  return (
    <div className="bio-main">
            {isLayout ? (
      <Stack className="bio-stack" direction="row">
        <Stack direction="column" className="bio-p">
        <Typography className="bio-p1" >
          <span style={{color:'lightBlue'}}>console</span>.
          <span style={{color:'#ebd481'}}>log</span>
          <span style={{color:'#fcba03'}}>(</span> 
          <span style={{color:'#cc8412'}}>'Hello world, I am...'</span>
          <span style={{color:'#fcba03'}}>)</span>;
        </Typography>
          <Typography className="bio-p2" variant="h1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '3px'}}>Amethyst White</Typography>
          <br/>
          <Typography className="bio-p3" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie odio ut massa blandit auctor. Nam maximus iaculis nunc et pharetra. Etiam in tortor a mi aliquam semper in quis nisl. Donec ac feugiat augue. Pellentesque at felis eu est pharetra tincidunt sed vitae nibh. Proin nec enim tincidunt, venenatis magna vel, varius felis. Curabitur vel pharetra nunc, id maximus lacus. Suspendisse pharetra eros sit amet enim volutpat dignissim. Quisque porta bibendum augue.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <br/>
          <br/>
          <Typography variant="body" className="bio-p4" > 
            <a> Check this shit out --></a>
            <br/>
            <a> Check this shit out too --></a>
          </Typography>
        </Stack>
        <Box component="img" src={Img} className="bio-img" />
       </Stack>

               ) : (
                <>
                 <Stack className="bio-stack-sm" direction="column">
                  <Typography className="bio-p1" >
                    <span style={{color:'lightBlue'}}>console</span>.
                    <span style={{color:'#ebd481'}}>log</span>
                    <span style={{color:'#fcba03'}}>(</span> 
                    <span style={{color:'#cc8412'}}>'Hello world, I am...'</span>
                    <span style={{color:'#fcba03'}}>)</span>;
                  </Typography>
                  <Typography className="bio-p2"  variant="h1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '3px'}}>Amethyst White</Typography>
                  <div component="img"  className="bio-img-sm" ></div>
                  <br/>
                  <Typography className="bio-p3" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie odio ut massa blandit auctor. Nam maximus iaculis nunc et pharetra. Etiam in tortor a mi aliquam semper in quis nisl. Donec ac feugiat augue. Pellentesque at felis eu est pharetra tincidunt sed vitae nibh. Proin nec enim tincidunt, venenatis magna vel, varius felis. Curabitur vel pharetra nunc, id maximus lacus. Suspendisse pharetra eros sit amet enim volutpat dignissim. Quisque porta bibendum augue.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                  <br/>
                  <br/>
                  <Typography variant="body" className="bio-p4" > 
                    <a href="/"> Check this shit out --></a>
                    <br/>
                    <a href="/"> Check this shit out too --></a>
                  </Typography>
               </Stack>
               </>
              )
            }
    </div>
  );
}

export default AboutMe;
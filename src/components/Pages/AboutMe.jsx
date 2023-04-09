//import "./style.css";
import React, { useState, useEffect } from 'react';
import "./style.css";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Img from '../../files/ame.png';

// TODO:
// write bio

function AboutMe () {
  const [isLayout, setLayout] = useState(window.innerWidth > 950);

  const updateMedia = () => {
    setLayout(window.innerWidth > 950);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
            <Divider variant="fullWidth" sx={{ bgcolor: "white", marginBottom: '25px' }} />  
            <Typography className="bio-p3" variant="body" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px', textIndent:'10px'}}>
            I am a jr. web developer from the rainy shores of Seattle. I have a background and heavy interest in the art world and I originally moved here to pursue Graphic Design at Seattle Art Institute, which unfortunately shut down right before the pandemic hit the world. Causing me to re-evaluate my position.
              <br/>
              <br/>
            I decided to change career paths and focus on web development. I enrolled in the ‘Full Stack Coding Bootcamp’ hosted by the University of Washington and Trilogy, and focused 6 months of my time during quarantine on this course. I found that I had an upper hand at user interface and general design because of my background, and graduated with all A’s.
            <br/>
            <br/>
            Once I received my certificate of completion, I started off working mainly in freelance. Eventually landing a role at Combat Labs Inc. working with their talented web team to build and open a store site for the electric game Rushdown Revolt. The company decided to downsize near the end of 2022 and I am now openly looking for work in the web dev field.
            <br/>
            <br/>
            If you are interested in my skill set, have any questions, or would just like to learn more about me. Please feel free to reach out to me personally on my contact page.

            </Typography>
              <br/>
              <br/>
            <Typography variant="body" className="bio-p4" > 
              <a href="/ContactInfo"> Reach out to me --></a>
              <br/>
              <a href="/ExperienceAndSkills"> Learn more, and check out my resume --></a>
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
                  <Typography className="bio-p3" variant="subtitle1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>
                  I am a jr. web developer from the rainy shores of Seattle. I have a background and heavy interest in the art world and I originally moved here to pursue Graphic Design at Seattle Art Institute, which unfortunately shut down right before the pandemic hit the world. Causing me to re-evaluate my position.
                  <br/>
                  <br/>
                  I decided to change career paths and focus on web development. I enrolled in the ‘Full Stack Coding Bootcamp’ hosted by the University of Washington and Trilogy, and focused 6 months of my time during quarantine on this course. I found that I had an upper hand at user interface and general design because of my background, and graduated with all A’s.
                  <br/>
                  <br/>
                  Once I received my certificate of completion, I started off working mainly in freelance. Eventually landing a role at Combat Labs Inc. working with their talented web team to build and open a store site for the electric game Rushdown Revolt. The company decided to downsize near the end of 2022 and I am now openly looking for work in the web dev field.
                  <br/>
                  <br/>
                  If you are interested in my skill set, have any questions, or would just like to learn more about me. Please feel free to reach out to me personally on my contact page.

                  </Typography>
                    <br/>
                    <br/>
                <Typography variant="body" className="bio-p4" > 
                  <a href="/ContactInfo"> Reach out to me --></a>
                  <br/>
                  <a href="/ExperienceAndSkills"> Learn more, and check out my resume --></a>
                </Typography>
              </Stack>
          </>
        )
      }
    </div>
  );
}

export default AboutMe;
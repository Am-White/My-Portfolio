import "./style.css";
import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import VideoPlayer from "react-background-video-player";
import Vid from "../../files/practiceVideo.mp4";

// TODO:
// change background video + img if it doesnt load
// Add in "open to work"
// clean up code + css


function Main () {
  return (
      <div className="main" >
        <VideoPlayer
          className="home-video"
          src={Vid}
          autoPlay={true}
          muted={true}
          
        />
        {/* <video autoPlay="autoplay" loop="loop" muted playsinline className="home-video" >
           <source src={Vid} type="video/mp4"/> 
        </video> */}

        <Container className="main-header" >
          <Typography className="main-p1" variant="h1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '3px'}}>Amethyst White</Typography>
          <Typography className="main-p2" variant="h6" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '3px'}}>Web Developer / UX / Design </Typography>
          <br/>
          <br/>
          <Typography variant="h6">
            <a href="https://github.com/Am-White/My-Portfolio" className="main-p3"> Check out the code for this site --> </a>
          </Typography>
        </Container>
      </div>
  );
}

export default Main;
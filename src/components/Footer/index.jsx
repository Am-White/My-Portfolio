import React from 'react';
import './style.css';
import { SocialIcon } from 'react-social-icons';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// TODO:
// look up terms / © / privacy policy and imbed?

function Footer () {
  return (
    <>
      <Grid container className="App-footer" direction="column" spacing={2}>
        <Grid item className="footer-grid" xs={12} >
          <SocialIcon bgColor="lightGrey" url="https://www.instagram.com/ameschiz" style={{ marginLeft: '15px', marginRight: '15px'}}/>
          <SocialIcon bgColor="lightGrey" url="https://www.github.com/Am-White" style={{ marginLeft: '15px', marginRight: '15px'}}/>
          <SocialIcon bgColor="lightGrey" url="https://www.linkedin.com/in/amethyst-white/" style={{ marginLeft: '15px', marginRight: '15px'}}/>
        </Grid>  
        <Grid item className="footer-grid" style={{ letterSpacing: {xs: '1px'}}}>
          <a href="/" className="footer-links"> Home</a> 
          <a href="/AboutMe" className="footer-links"> About</a> 
          <a href="/ContactInfo" className="footer-links"> Contact</a> 
          <a href="/" className="footer-links"> Terms</a> 
          <a href="/" className="footer-links"> Privacy Policy</a> 
        </Grid> 
        <Grid item className="footer-grid" xs={12} >
          <Typography variant="subtitle2" style={{ color: 'darkGrey'}}> 2023 © </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
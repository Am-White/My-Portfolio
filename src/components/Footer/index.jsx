import React from 'react';
import './style.css';
import Stack from '@mui/material/Stack';
import { SocialIcon } from 'react-social-icons';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// TODO:
// clean up code + css
// look up terms / © / privacy policy and imbed?

function Footer () {
  return (
    <>
      <Grid container className="App-footer" direction="column" >
        <Grid className="footer-grid" xs={12} direction="row">
          <SocialIcon bgColor="lightGrey" url="https://www.instagram.com/ameschiz" style={{ marginLeft: '15px', marginRight: '15px'}}/>
          <SocialIcon bgColor="lightGrey" url="https://www.github.com/Am-White" style={{ marginLeft: '15px', marginRight: '15px'}}/>
          <SocialIcon bgColor="lightGrey" url="https://www.linkedin.com/in/amethyst-white/" style={{ marginLeft: '15px', marginRight: '15px'}}/>
        </Grid>  
        <Grid className="footer-grid" direction="row" style={{ letterSpacing: {xs: '1px'}}}>
          <a href="/" className="footer-links"> Home</a> 
          <a href="/AboutMe" className="footer-links"> About</a> 
          <a href="/ContactInfo" className="footer-links"> Contact</a> 
          <a href="/" className="footer-links"> Terms</a> 
          <a href="/" className="footer-links"> Privacy Policy</a> 
        </Grid> 
        <Grid className="footer-grid" xs={12} direction="row">
          <Typography variant="subtitle2" style={{ color: 'darkGrey'}}> 2023 © </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
//import "./style.css";
import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Resume from '../../files/resume.pdf';
import {styled} from '@mui/material/styles';

// TODO:
// clean up layout and on flex
// drop down and transition on click for info
// downloadble click\

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  color: '#c1bec1'
}));

function ExperienceAndSkills () {

  return (
      <div className="ens-main">
        <div className="ens-container">
          <Typography variant="h1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>EXPERIENCE AND SKILLS</Typography>
          <Typography className="projects-title" variant="subtitle1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px', paddingBottom: '25px'}}> 
            For more information, please go to the Contact page and write me an email or email me directly at aybwhite@gmail.com
            <br/>
            ꧁ Resume can be found at the bottom of this page ꧂
            </Typography>
            <Divider variant="fullWidth" sx={{ bgcolor: "white" }} />  
              <Stack direction="column" className="ens-stack" spacing={4} >
                <Typography  variant="body" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>
                  <Typography className="ens-headers" variant="h3" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>Education</Typography>
                    <Item >
                      <span className="ens-title">One-on-One Coding Mentorship:</span> 
                      With Kenan Stipek - Seattle, WA 
                      <br/>
                      <span className="ens-date">
                      May 2021 to 2022
                      </span>
                    </Item>
                      <Item>
                      <span className="ens-title">Full Stack Coding Certificate:</span> 
                        University of Washington and Trilogy - Seattle, WA 
                        <br/>
                      <span className="ens-date">
                      September 2020 to 2021
                      </span>
                    </Item>
                    <Item>
                      <span className="ens-title">Graphic and Web Design Studies:</span> 
                      Art Institute of Seattle - Seattle, WA 
                      <br/>
                      <span className="ens-date">
                      October 2018 to 2019
                      </span>
                    </Item>
                    <Item>
                      <span className="ens-title">Associates in Arts and Science Degree:</span> 
                      Whatcom Community College - Bellingham, WA 
                      <br/>
                      <span className="ens-date">
                      August 2014 to 2017
                      </span>
                    </Item>
                    <Item>
                      <span className="ens-title">High School Diploma:</span> 
                      Sehome High School - Bellingham, WA 
                      <br/>
                      <span className="ens-date">
                      September 2012 to 2016
                      </span>
                    </Item>
                  </Typography>
                </Stack>

          <Stack direction="column" className="ens-stack" spacing={2}>
            <Typography variant="body" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>
              <Typography className="ens-headers" variant="h3" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>Work History</Typography>
                <Item>
                  <span className="ens-title">Vortex Games/Rushdown Revolt:</span> 
                  Jr. Web Developer 
                  <br/>
                  <span className="ens-date">
                  February 2022 - February 2023
                  </span>
                </Item>
                  <Item>
                  <span className="ens-title">HYTE/ Tabulara:</span> 
                  Software Engineer 
                  <br/>
                  <span className="ens-date">
                  July 2021- December 2021
                  </span>
                </Item>
                <Item>
                  <span className="ens-title">Valtesse Productions:</span> 
                  Web Developer/Marketing and Advertising
                  <br/>
                  <span className="ens-date">
                  June 2021- April 2022
                  </span>
                </Item>
                <Item>
                  <span className="ens-title">Freelance Web Development:</span> 
                  Web Developer
                  <br/>
                  <span className="ens-date">
                  June 2021- April 2022
                  </span>
                </Item>
            </Typography>
          </Stack>
          <Stack direction="column" className="ens-stack" spacing={2}>
            <a href={Resume} download="amethyst-white-resume.pdf" target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <button className="ens-btn" variant="contained" disableElevation style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px', fontSize: 'larger'}}>
                Download Resume
              </button>
            </a>
          </Stack>
        </div>
      </div>
  );
}

export default ExperienceAndSkills;
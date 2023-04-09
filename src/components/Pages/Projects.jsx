import "./style.css";
import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ProjectCard from './projectCard.jsx';

// TODO:
// All of it....
// TBD

function Projects () {
  return (
    <div className="projects-main">
        <div className="projects-container">
        <Stack direction="column" className="projects-stack">
          <Typography className="projects-title" variant="h1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}> PROJECTS AND SITES</Typography>
          <Typography className="projects-title" variant="subtitle1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px',  paddingBottom: '25px'}}> 
          For more information on any of the following projects, please go to the Contact page and write me an email or email me directly at aybwhite@gmail.com
          <br/>
          ꧁ More projects in my github repositories:  
          <a className="projects-link" href="https://github.com/Am-White?tab=repositories" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '2.5px'}}> Click Here</a>
          ꧂
          </Typography>
          <Divider sx={{ bgcolor: "white" }} />  
          <Box sx={{ flexGrow: 1, paddingTop: '25px'}} >
            <Grid container spacing={2} >
              <ProjectCard item/>
            </Grid>
          </Box>
        </Stack>
        </div>
    </div>
  );
}

export default Projects;
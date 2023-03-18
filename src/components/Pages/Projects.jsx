import "./style.css";
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
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
          <br/>
          <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} >
              <ProjectCard item />
            </Grid>
          </Box>
        </Stack>
        </div>
    </div>
  );
}

export default Projects;
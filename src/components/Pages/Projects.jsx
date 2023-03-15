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
          <div className="projects-header">
          <Typography className="projects-title" variant="h2"> PROJECTS AND SITES</Typography>
          </div>
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
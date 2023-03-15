//import "./style.css";
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

// TODO:
// clean up layout and on flex
// drop down and transition on click for info
// downloadble click

function ExperienceAndSkills () {
  return (
      <div className="ens-main">
        <Card className="ens-container" style={{backgroundColor: '#5b7ab7'}}>
          <Typography variant="h2">EXPERIENCE AND SKILLS</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli</Typography>
          <br/>
          <Stack className="ens-cards" direction="row" spacing={2}>
            <Card style={{width:'30%', minHeight:'100px'}}>JOBS</Card>
            <Card style={{width:'30%', minHeight:'100px'}}>EDUCATION</Card>
            <Card style={{width:'30%', minHeight:'100px'}}>RESUME</Card>
          </Stack>
        </Card>
      </div>
  );
}

export default ExperienceAndSkills;
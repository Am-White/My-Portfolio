import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from '@mui/material/Grid';
import Divider from "@material-ui/core/Divider";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const projects = [
  {
    id: 0,
    url: "URL",
    project_name: "Project",
    project_description: "Blah Blah"
  },
  {
    id: 1,
    url: "URL",
    project_name: "Project",
    project_description: "Blah Blah"
  },
  {
    id: 2,
    url: "URL",
    project_name: "Project",
    project_description: "Blah Blah"
  },
  {
    id: 3,
    url: "URL",
    project_name: "Project",
    project_description: "Blah Blah"
  },
  {
    id: 4,
    url: "URL",
    project_name: "Project",
    project_description: "Blah Blah"
  },
  {
    id: 1,
    url: "URL",
    project_name: "Project",
    project_description: "Blah Blah"
  },
  {
    id: 2,
    url: "URL",
    project_name: "Project",
    project_description: "Blah Blah"
  },
  {
    id: 3,
    url: "URL",
    project_name: "Project",
    project_description: "Blah Blah"
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//{row.project_description}

const ProjectCard = () =>
  projects.map(row => (
    <>
    <Grid item sm={3}>
      <Item >
          {row.project_description}
      </Item>
    </Grid>
      </>
  ));
export default ProjectCard;
import React from "react";
import { useTheme } from '@mui/material/styles';
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
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// TODO:
// Screen Shot and add in multiple photos (dropbox folder for links)
// 

const projects = [
  {
    id: 0,
    url: "URL",
    imgPath: "https://www.stockvault.net/data/2013/03/09/142701/preview16.jpg",
    project_title: "Project1",
    project_description: "Blah Blah1"
  },
  {
    id: 1,
    url: "URL",
    imgPath: "https://www.stockvault.net/data/2013/03/09/142701/preview16.jpg",
    project_title: "Project2",
    project_description: "Blah Blah2"
  },
  {
    id: 2,
    url: "URL",
    imgPath: "https://www.stockvault.net/data/2013/03/09/142701/preview16.jpg",
    project_title: "Project3",
    project_description: "Blah Blah3"
  },
  {
    id: 3,
    url: "URL",
    imgPath: "https://www.stockvault.net/data/2013/03/09/142701/preview16.jpg",
    project_title: "Project4",
    project_description: "Blah Blah4"
  },
  {
    id: 4,
    url: "URL",
    imgPath: "https://www.stockvault.net/data/2013/03/09/142701/preview16.jpg",
    project_title: "Project5",
    project_description: "Blah Blah5"
  },
  {
    id: 1,
    url: "URL",
    imgPath: "https://www.stockvault.net/data/2013/03/09/142701/preview16.jpg",
    project_title: "Project6",
    project_description: "Blah Blah6"
  },
  {
    id: 2,
    url: "URL",
    imgPath: "https://www.stockvault.net/data/2013/03/09/142701/preview16.jpg",
    project_title: "Project7",
    project_description: "Blah Blah7"
  },
  {
    id: 3,
    url: "URL",
    imgPath: "https://www.stockvault.net/data/2013/03/09/142701/preview16.jpg",
    project_title: "Project8",
    project_description: "Blah Blah8"
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ProjectCard() {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projects.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

    return(
    projects.map(row => (
      <>
      <Grid item xs={12} sm={6} md={4}>
        <Item >
          <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {projects.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: 'block',
                      objectFit: 'cover',
                      maxWidth: 600,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={row.imgPath}
                    // alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>

          <Typography variant="h5" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>{row.project_title}</Typography>
          <Typography variant="body1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>{row.project_description}</Typography>
          <br/>
          <Button variant="contained"> Live Link </Button>
          <br/>
          <br/>
          <Button variant="outlined"> GitHub Code </Button>
          <Button variant="outlined"> Figma Design </Button>
        </Item>
      </Grid>
      </>
  )))};
export default ProjectCard;
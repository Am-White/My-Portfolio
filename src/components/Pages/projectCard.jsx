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
import { purple } from '@mui/material/colors';
import "./style.css";

// TODO:
// Screen Shot and add in multiple photos (dropbox folder for links?)
// Add links, title, description

const projects = [
  {
    project_title: "Project1",
    project_description: "Quisque porta bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    urlLive: "URL",
    urlGithub: "URL",
    urlFigma: "URL",
    imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    project_title: "Project2",
    project_description: "Quisque porta bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    urlLive: "URL",
    urlGithub: "URL",
    urlFigma: "URL",
    imgPath: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
  },
  {
    project_title: "Project3",
    project_description: "Quisque porta bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    urlLive: "URL",
    urlGithub: "URL",
    urlFigma: "URL",
    imgPath: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
  },
  {
    project_title: "Project4",
    project_description: "Quisque porta bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    urlLive: "URL",
    urlGithub: "URL",
    urlFigma: "URL",
    imgPath:         "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    project_title: "Project5",
    project_description: "Quisque porta bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    urlLive: "URL",
    urlGithub: "URL",
    urlFigma: "URL",
    imgPath: ""
  },
  {
    project_title: "Project6",
    project_description: "Quisque porta bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    urlLive: "URL",
    urlGithub: "URL",
    urlFigma: "URL",
    imgPath: ""
  },
  {
    project_title: "Project7",
    project_description: "Quisque porta bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    urlLive: "URL",
    urlGithub: "URL",
    urlFigma: "URL",
    imgPath: ""
  },
  {
    project_title: "Project8",
    project_description: "Quisque porta bibendum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    urlLive: "URL",
    urlGithub: "URL",
    urlFigma: "URL",
    imgPath: ""
  },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#c1bec1',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const CustomButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[400]),
//   backgroundColor: purple[500],
//   '&:hover': {
//     backgroundColor: purple[700],
//   },
// }));

function ProjectCard() {

  const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = projects.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleStepChange = (row) => {
  //   setActiveStep(row);
  // };

    return(
    projects.map(row => (
      <>
      <Grid item xs={12} sm={6} md={4} >
        <Item >
          <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
          {/* <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          > */}
            {/* {projects.map((step, index) => ( */}
              <div >
                {/* {Math.abs(activeStep - index) <= 1 ? ( */}
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
                  {/* ) : null}  */}
              </div>
             {/* ))}
           </AutoPlaySwipeableViews> */}
          {/* <MobileStepper
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
          /> */}
        </Box>
          <div className="card-text">
            <Typography variant="h4" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}>{row.project_title}</Typography>
            <Typography variant="body1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px' }}>{row.project_description}</Typography>
          </div>
          <div className="card-btns">
            <Stack spacing={2}className="card-live-btn">
            <div >
              <button className="card-live-border" style={{buttonfontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}> Live Link </button>
              <div class="fake-border left"></div>
              <div class="fake-border top"></div>
              <div class="fake-border right"></div>
              <div class="fake-border bottom"></div>
            </div>
                      
            </Stack>
            <br/>
            <Stack direction="row" spacing={2}>
              <button className="card-btn" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}> GitHub Code </button>
              <button className="card-btn" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}> Figma Design </button>
            </Stack>
          </div>
        </Item>
      </Grid>
      </>
  )))};
export default ProjectCard;
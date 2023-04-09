import React from "react";
// import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./style.css";

// TODO:
//https://codesandbox.io/s/1tj5pm?file=/demo.js

const projects = [
  {
    id: "1",
    project_title: "Rushdown Revolt Store",
    project_description: "A store for the most electric, combo-centric, and expressive fighting game. Check out the Closed Beta Supporter Pack: 'Keep on Rushing while Team Vortex prepares the game for relaunch'",
    textLive: "Live Link",
    urlLive: "https://store.rushdownrevolt.com/",
    textGithub: "View Source Code",
    urlGithub: "https://github.com/Vortex-Rising/rushdown-revolt-website",
    textFigma: "Figma Design",
    urlFigma: "",
    imgPath: require("../../files/RDR.png"),
    extra: ""
  },
  {
    id: "2",
    project_title: "Masion de V Entertainment",
    project_description: "Explore high-end spectacle and thematic costuming, to champagne skirts, roaming dessert tables, and specialty circus artists, Maison de V is the WOW factor you've been looking for!",
    textLive: "Live Link",
    urlLive: "https://www.vmaisonv.com/",
    textGithub: "View Source Code",
    urlGithub: "",
    textFigma: "Figma Design",
    urlFigma: "",
    imgPath: require("../../files/MDV.png"),
    extra: "Squarespace Made"
  },
  {
    id: "3",
    project_title: "Teza Talks",
    project_description: "Enter the world of TEZA, a pure rockstar and true electric soul from the Seattle area. Find tour dates, and locations here. Make sure to follow her social media links to stay up to date.",
    textLive: "Live link",
    urlLive: "https://www.tezatalks.com/",
    textGithub: "View Source Code",
    urlGithub: "",
    textFigma: "Figma Design",
    urlFigma: "",
    imgPath: require("../../files/TT.png"),
    extra: "Squarespace Made"
  },
  {
    id: "4",
    project_title: "Daniel Harm",
    project_description: "Take a look at Daniel Harm's beautiful cinematography, build from his dedication as an athlete, wilderness & rope exploration, set experimentation, and artisan stone-work.",
    textLive: "Live link",
    urlLive: "https://www.danielharm.com/",
    textGithub: "View Source Code",
    urlGithub: "",
    textFigma: "Figma Design",
    urlFigma: "",
    imgPath: require("../../files/DH.png"),
    extra: "Squarespace Made"
  },
  {
    id: "5",
    project_title: "Kre8ore",
    project_description: "This site will share with the world the musical masterpieces of Zach Kendall, a producer currently located in Seattle, with a unique ear and outstanding talent for guitar.",
    textLive: "Coming Soon",
    // urlLive: "",
    textGithub: "View Source Code",
    urlGithub: "",
    textFigma: "Figma Design",
    urlFigma: "",
    imgPath: require("../../files/K.jpg"),
    extra: "222"
  },
  {
    id: "6",
    project_title: "Art from a Gem",
    project_description: "A personal store and virtual gallery to show case art made by yours truly, Amethyst White. Currently in the design phase, check out my figma link below to see the vison!",
    textLive: "Coming Soon",
    // urlLive: "",
    textGithub: "View Source Code",
    urlGithub: "",
    textFigma: "Figma Design",
    urlFigma: "https://www.figma.com/file/bQxI0QpgwQuGM9R0AgI8zC/Art-From-A-Gem?t=3nkW3LIqxuTcpjcY-1",
    imgPath: require("../../files/AFAG.png"),
    extra: ""
  },
  {
    id: "7",
    project_title: "Coin Creatif",
    project_description: "This is an application for artist and creative types. It is a platform to market handmade items with the ability to post new items and checkout items as well once you have logged into your account.",
    textLive: "Under Construction",
    // urlLive: "",
    textGithub: "View Source Code",
    urlGithub: "https://github.com/elizabethbrandt/coincreatif",
    textFigma: "Figma Design",
    urlFigma: "https://www.figma.com/file/NaU5Fx3mdIDPiWIrLzwzOL/Coin-Creatif?node-id=50%3A0&t=3nkW3LIqxuTcpjcY-1",
    imgPath: require("../../files/CC.png"),
    extra: ""
  },
  {
    id: "8",
    project_title: "Elixirs and Mixers",
    project_description: "A dream for a master at craft cocktails. Display recipes and photos of your creations, new and modified classics while also showcasing your personal experience behind the bar.",
    textLive: "Under Construction",
    // urlLive: "",
    textGithub: "View Source Code",
    urlGithub: "https://github.com/Am-White/ElixirsandMixers",
    textFigma: "Figma Design",
    urlFigma: "https://www.figma.com/file/3E4kbysaWCi0vZe41vVcID/Elixirs-and-Mixers?t=3nkW3LIqxuTcpjcY-1",
    imgPath: require("../../files/EAM.png"),
    extra: ""
  },
  {
    id: "9",
    project_title: "NASA-Search-Engine",
    project_description: "NASA Image Search Engine is a responsive web app that displays images and information about space, stars and planets. This app uses two NASA API's and one Wikipedia API.",
    textLive: "Under Constuction",
    // urlLive: "",
    textGithub: "View Source Code",
    urlGithub: "https://github.com/Am-White/Nasa-Search-Engine",
    textFigma: "Figma Design",
    urlFigma: "",
    imgPath: require("../../files/NSE.png"),
    extra: ""
  },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#c1bec1',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: '5px 8px 5px 5px rgb(30, 29, 29, 0.7)'
}));

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const CustomButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[400]),
//   backgroundColor: purple[500],
//   '&:hover': {
//     backgroundColor: purple[700],
//   },
// }));

function ProjectCard() {

  // const theme = useTheme();
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
      <Grid item xs={12} sm={6} md={4}>
        <Item >
          <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
          {/* <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          > */}
            {/* {projects.map((step, index) => ( */}
              <div key={row.id}>
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
            <Typography variant="h4" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px', color: 'black'}}>{row.project_title}</Typography>
            <Typography variant="body1" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '1px' }}>{row.project_description}</Typography>
          </div>
          <div className="card-btns">
            <Stack spacing={2} className="card-live-btn">
            <div >
              <a href={row.urlLive} target="_blank">
                <button className="card-live-border" style={{buttonfontFamily: 'Bebas Neue, cursive', letterSpacing: '1px'}}> 
                  {row.textLive} 
                </button>
              </a>
              <div className="fake-border left"></div>
              <div className="fake-border top"></div>
              <div className="fake-border right"></div>
              <div className="fake-border bottom"></div>
            </div>
                      
            </Stack>
            
            <Stack direction="row" spacing={2} sx={{ marginTop: "10px", marginBottom: "5px"}} >
              {row.urlGithub && !!row.urlGithub.length && 
              <a className="card-btn" href={row.urlGithub} target="_blank" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '2.5px'}}> 
                {row.textGithub} 
              </a>
              }
              {row.urlFigma && !!row.urlFigma.length && 
              <a className="card-btn" href={row.urlFigma} target="_blank" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '2.5px'}}> 
                {row.textFigma}
              </a>
              }
              {row.extra && !!row.extra.length && 
              <Typography className="card-btn-extra" style={{ fontFamily: 'Bebas Neue, cursive', letterSpacing: '2.5px', fontSize: "14px" }}> 
                {row.extra}
              </Typography>
              }
            </Stack>
          </div>
        </Item>
      </Grid>
      </>
  )))};
export default ProjectCard;
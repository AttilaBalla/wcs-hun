import * as React from 'react';
import {styled} from "@mui/material/styles";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import CelebrationIcon from '@mui/icons-material/Celebration';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LockIcon from '@mui/icons-material/Lock';
import {StepConnector, stepConnectorClasses, StepIconProps} from "@mui/material";


const steps = [
  {
    label: '18:00 - Buli (DJ Gregmagic)',
  },
  {
    label: '19:00 - Verseny regisztráció lezárása',
  },
  {
    label: '19:30 - Novice Prelim',
  },
  {
    label: '20:00 - Inter Prelim',
  },
  {
    label: '20:30 - Newcomer Prelim',
  },
  {
    label: '21:00 - Novice Final',
  },
  {
    label: '21:30 - Newcomer Final',
  },
  {
    label: '22:00 - Intermediate Final',
  },
  {
    label: '22:30 - Advanced/AllStar Final',
  },
  {
    label: '23:00 - DJ Rising Star',
  },
  {
    label: '0:00 - Awards',
  },
  {
    label: '0:30 - Buli (DJ Feri)',
  },
];

const icons: { [index: string]: React.ReactElement } = {
  1: <NightlifeIcon/>,
  2: <LockIcon/>,
  3: <EmojiEventsIcon/>,
  4: <EmojiEventsIcon/>,
  5: <EmojiEventsIcon/>,
  6: <EmojiEventsIcon/>,
  7: <EmojiEventsIcon/>,
  8: <EmojiEventsIcon/>,
  9: <EmojiEventsIcon/>,
  10: <NightlifeIcon/>,
  11: <CelebrationIcon/>,
  12: <NightlifeIcon/>,
};

const StepperConnector = styled(StepConnector)(({ theme }) => ({
  width: '3px',
  marginLeft: '22px',
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const StepperIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({theme, ownerState}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

export function ScheduleStepper() {
  const [activeStep, setActiveStep] = React.useState(11);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  function SetStepperIcon(props: StepIconProps) {
    const {active, completed, className} = props;

    return (
      <StepperIconRoot ownerState={{completed, active}} className={className}>
        {icons[String(props.icon)]}
      </StepperIconRoot>
    );
  }

  return (
    <Box sx={{maxWidth: 400}}>
      <Stepper activeStep={activeStep} orientation="vertical" connector={<StepperConnector/>}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={SetStepperIcon}>
              <Typography fontWeight={600}>{step.label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
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


const steps: {label: string, dj?: string}[] = [
  {
    label: '18:00 - 19:00 Tánc/Buli/Party',
    dj: 'DJ GregMagic'
  },
  {
    label: '18:30 - Versenyregisztráció lezárása',
  },
  {
    label: '19:00 - 19:25 Novice Prelim',
  },
  {
    label: '19:30 - 19:55 Newcomer Prelim',
  },
  {
    label: '20:00 - 20:25 Intermediate Prelim',
  },
  {
    label: '20:25 - 20:55 Tánc/Buli/Party',
    dj: 'DJ GregMagic'
  },
  {
    label: '21:00 - 21:15 Novice Finals',
  },
  {
    label: '21:20 - 21:35 Newcomer Finals',
  },
  {
    label: '21:45 - 22:15 Intermediate Finals',
  },
  {
    label: '22:30 - 23:00 Advanced/AllStar Finals',
  },
  {
    label: '23:00 - 23:30 Tánc/Buli/Party',
    dj: 'DJ RisingStar'
  },
  {
    label: '23:30 - 23:50 Díjátadó/Awards',
  },
  {
    label: '23:50 - 00:20 Tánc/Buli/Party',
    dj: 'DJ RisingStar'
  },
  {
    label: '00:20 - 02:00 Tánc/Buli/Party',
    dj: 'DJ Feri'
  },
];

const icons: { [index: string]: React.ReactElement } = {
  1: <NightlifeIcon/>,
  2: <LockIcon/>,
  3: <EmojiEventsIcon/>,
  4: <EmojiEventsIcon/>,
  5: <EmojiEventsIcon/>,
  6: <NightlifeIcon/>,
  7: <EmojiEventsIcon/>,
  8: <EmojiEventsIcon/>,
  9: <EmojiEventsIcon/>,
  10: <EmojiEventsIcon/>,
  11: <NightlifeIcon/>,
  12: <CelebrationIcon/>,
  13: <NightlifeIcon/>,
  14: <NightlifeIcon/>,
};

const StepperConnector = styled(StepConnector)(({ theme }) => ({
  width: '3px',
  marginLeft: '18px',
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
      minHeight: '16px',
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
  width: 40,
  height: 40,
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
  const [activeStep, setActiveStep] = React.useState(13);
  // const [completed, setCompleted] = React.useState<{
  //   [k: number]: boolean;
  // }>({});

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
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={SetStepperIcon}>
              <Typography variant={'body1'} fontWeight={600}>{step.label}</Typography>
              {step.dj ? <Typography fontWeight={400}>{step.dj}</Typography> : null}
            </StepLabel>

          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

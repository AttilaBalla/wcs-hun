import {styled} from "@mui/material/styles";

export const StepperIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean, marshalling?: boolean, waiting?: boolean, results?: boolean };
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
  ...(ownerState.waiting && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,33,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.marshalling && {
    backgroundImage:
      'linear-gradient(136deg, rgba(255,136,0,1) 40%, rgba(138,35,135,1) 100%);',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    opacity: '0.7',
    backgroundImage:
      'linear-gradient(136deg, rgba(7,140,0,1) 0%, rgba(12,203,178,1) 80%);',
  }),
  ...(ownerState.results && {
    backgroundImage:
      'linear-gradient(136deg, rgba(54,176,4,1) 0%, rgba(138,35,135,1) 100%);',
  }),
}));
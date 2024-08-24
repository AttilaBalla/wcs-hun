import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {CompetitionStatus} from "@/components/status/statusData";
import {StatusListItem} from "@/components/status/StatusListItem";
import {StatusChip} from "@/components/status/StatusChip";
import {StepperIconRoot} from "@/components/shared/Icons";
import {ReactNode} from "react";

interface IProps {
  text: string;
  status: CompetitionStatus
  heats?: { text: string, status: CompetitionStatus }[]
}

interface StatusProperties {
  textColor: string,
  chip: ReactNode,
  icon: ReactNode
}

export function StatusListDivision(props: IProps) {

  const {text, status, heats} = props;

  const statusVariants: Record<CompetitionStatus, StatusProperties> = {
    [CompetitionStatus.waiting]: {
      textColor: 'grey.900',
      chip: null,
      icon:
        <StepperIconRoot ownerState={{waiting: true}}>
          <AccessTimeIcon sx={{width: 30, height: 30, color: 'inherit'}}/>
        </StepperIconRoot>
    },
    [CompetitionStatus.marshalling]: {
      textColor: 'grey.900',
      chip: <StatusChip color={'warning'} label="MARSHALLING"/>,
      icon:
        <StepperIconRoot ownerState={{marshalling: true}}>
          <DirectionsRunIcon sx={{width: 30, height: 30}}/>
        </StepperIconRoot>
    },
    [CompetitionStatus.dancing]: {
      textColor: 'grey.900',
      chip: null,
      icon:
        <StepperIconRoot ownerState={{active: true}}>
          <PlayArrowIcon sx={{width: 30, height: 30, color: 'inherit'}}/>
        </StepperIconRoot>
    },
    [CompetitionStatus.finished]: {
      textColor: 'grey.400',
      chip: null,
      icon:
        <StepperIconRoot ownerState={{completed: true}}>
          <CheckIcon sx={{width: 30, height: 30}}/>
        </StepperIconRoot>
    },
    [CompetitionStatus.results]: {
      textColor: 'grey.400',
      chip: <StatusChip color={'success'} label="RESULTS"/>,
      icon:
        <StepperIconRoot ownerState={{results: true}}>
          <EmojiEventsIcon sx={{width: 30, height: 30}}/>
        </StepperIconRoot>
    }
  }


  return (
    <>
      <Box display={'flex'} sx={{
        alignItems: 'center',
        color: statusVariants[status].textColor
      }}>
        <Box sx={{flexBasis: '20%', marginRight: '1rem', float: 'right'}}>
          {statusVariants[status].chip}
        </Box>
        {statusVariants[status].icon}
        <Typography sx={{ml: '.5rem'}} variant={'button'} fontSize={35}>{text}</Typography>
      </Box>
      {heats ? heats.map((item) => {
        return (
          <StatusListItem text={item.text} status={item.status} icon={statusVariants[item.status].icon}/>
        )
      }) : null}
    </>
  )
}
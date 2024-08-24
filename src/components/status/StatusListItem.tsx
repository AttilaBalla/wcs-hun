import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {StatusChip} from "@/components/status/StatusChip";
import {CompetitionStatus} from "@/components/status/statusData";
import {ReactNode} from "react";


interface IProps {
  text: string
  status: CompetitionStatus
  icon: ReactNode
}

export function StatusListItem(props: IProps) {

  const {text, status, icon} = props;

  return (
    <Box display={'flex'} sx={{
      alignItems: 'center',
      color: status === CompetitionStatus.finished ? 'grey.400' : 'grey.900'
    }}>
      <Box sx={{flexBasis: '30%', marginRight: '1rem'}}>
        {status === CompetitionStatus.dancing ?
          <Box sx={{float: 'right', ml: '1rem'}}>
            {icon}
          </Box> :
          null
        }
        {status === CompetitionStatus.marshalling ?
          <>
            <Box sx={{float: 'right', ml: '1rem'}}>
              {icon}
            </Box>
            <StatusChip color={'warning'} label="MARSHALLING"/>
          </> : null}
      </Box>
      <Typography variant={'button'} fontSize={35}>{text}</Typography>
      {status === CompetitionStatus.finished ?
        <Box sx={{ml: '.5rem'}}>
          {icon}
        </Box> :
        null
      }
    </Box>
  )
}
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {StatusChip} from "@/components/status/StatusChip";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface IProps {
  text: string;
  order: number;
  currentIndex: number;
}

export function StatusListItem(props: IProps) {

  const {text, order, currentIndex} = props;

  return (
    <Box display={'flex'} sx={{
      alignItems: 'center',
      color: order < currentIndex ? 'grey.400' : 'grey.900'
    }}>
      <Box sx={{flexBasis: '20%', marginRight: '.5rem'}}>
        {order === currentIndex ?
          <StatusChip label="MARSHALLING"/> : null}
      </Box>
      <Typography variant={'button'} fontSize={35}>{text}</Typography>
      {order < currentIndex ?
        <CheckCircleIcon sx={{width: 45, height: 45, color: 'success.light'}}/> :
        null
      }
    </Box>
  )
}
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface IProps {
  text: string;
  order: number;
  currentIndex: number;
}

export function StatusListDivision(props: IProps) {

  const { text, order, currentIndex } = props;

  return (
    <Box display={'flex'} sx={{
      alignItems: 'center',
      color: order < currentIndex ? 'grey.400' : 'grey.900'
    }}>
      {order < currentIndex ?
        <CheckCircleIcon sx={{width: 50, height: 50, color: 'success.light'}}/> :
        <EmojiEventsIcon sx={{ width: 50, height: 50, color: 'inherit'}}/>}
      <Typography variant={'button'} fontSize={35}>{text}</Typography>
    </Box>
  )
}
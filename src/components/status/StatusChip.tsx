import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

interface IProps {
  label?: string;
}

export function StatusChip(props: IProps) {

  const {label } = props;

  return (
    <Box sx={{
      display: 'flex',
      bgcolor: `warning.light`,
      padding: '.5rem',
      borderRadius: '20px',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {label ? <Typography fontSize={20} fontWeight={600}>{label}</Typography> : null}
      <DoubleArrowIcon sx={{ width: 25, height: 25}}/>
    </Box>
  )
}
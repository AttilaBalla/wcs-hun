import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface IProps {
  label: string;
  color: 'warning' | 'success';

}

export function StatusChip(props: IProps) {

  const {label, color } = props;

  return (
    <Box sx={{
      display: 'flex',
      float: 'right',
      maxWidth: '165px',
      color: 'white',
      bgcolor: `${color}.light`,
      padding: '.5rem',
      borderRadius: '20px',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {label ? <Typography fontSize={20} fontWeight={600}>{label}</Typography> : null}
    </Box>
  )
}
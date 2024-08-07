import Typography from "@mui/material/Typography";
import {Paper, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {categoryHeader} from "@/utils/typography";
import Divider from "@mui/material/Divider";

export function PriceTableMobile() {
  return (
    <Paper sx={{p: '.75rem'}}>
      <Typography sx={{mb: '1rem'}}><b>Hozzájárulási költségek</b></Typography>
      <Stack spacing={1}>
        <Box display={'flex'} sx={{justifyContent: 'space-between'}}>
          <Typography sx={categoryHeader}>
            <b>Elővételben</b>
          </Typography>
          <Typography sx={categoryHeader}>
            4500 Ft
          </Typography>
        </Box>
        <Box display={'flex'} sx={{justifyContent: 'space-between'}}>
          <Typography>
            <b>Helyszínen</b>
          </Typography>
          <Typography>
            <b>5000 Ft</b>
          </Typography>
        </Box>
        <Divider sx={{my: '1rem'}}/>
        <Box display={'flex'} sx={{justifyContent: 'space-between'}}>
          <Typography>
            <b>Nézőként</b>
          </Typography>
          <Typography>
            <b>1000 Ft</b>
          </Typography>
        </Box>
        <Divider sx={{my: '1rem'}}/>
        <Box display={'flex'} sx={{justifyContent: 'space-between'}}>
          <Typography>
            <b>Verseny nevezés *</b>
          </Typography>
          <Typography>
            <b>2000 Ft</b>
          </Typography>
        </Box></Stack>
    </Paper>
  )
}
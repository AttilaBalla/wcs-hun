import Typography from "@mui/material/Typography";
import {Paper, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {categoryHeader} from "@/utils/typography";

export function PriceTableMobile() {
  return (
    <Paper sx={{p: '.75rem'}}>
      <Typography sx={{...categoryHeader, mb: '1rem'}}>Árak</Typography>
      <Stack spacing={1}>
        <Box display={'flex'} sx={{justifyContent: 'space-between'}}>
          <Typography>
            <b>Részvételi díj elővételben</b>
          </Typography>
          <Typography sx={categoryHeader}>
            4500 Ft
          </Typography>
        </Box>
        <Box display={'flex'} sx={{justifyContent: 'space-between'}}>
          <Typography>
            <b>Részvételi díj helyszínen</b>
          </Typography>
          <Typography>
            <b>5000 Ft</b>
          </Typography>
        </Box>
        <Box display={'flex'} sx={{justifyContent: 'space-between'}}>
          <Typography>
            <b>Verseny nevezés *</b>
          </Typography>
          <Typography>
            <b>2000 Ft</b>
          </Typography>
        </Box>
      </Stack>
    </Paper>
  )
}
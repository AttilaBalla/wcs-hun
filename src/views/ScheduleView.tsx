import {ScheduleStepper} from "@/components/schedule/ScheduleStepper";
import Box from "@mui/material/Box";

export function ScheduleView() {
  return (
    <Box sx={{display: 'flex'}}>
      <Box sx={{ display: {xs: 'none', sm: 'block'}, width: '70%'}}>
        <img width={'90%'} height={'100%'} src={'/static/images/cup.jpg'} alt={'cup'}/>
      </Box>
      <Box sx={{p: '3rem'}}>
        <ScheduleStepper/>
      </Box>
    </Box>
  )
}
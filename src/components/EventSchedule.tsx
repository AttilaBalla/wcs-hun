import {ScheduleStepper} from "@/components/schedule/ScheduleStepper";
import Box from "@mui/material/Box";

export function EventSchedule() {
  return (
    <Box sx={{display: 'flex'}}>
      <Box sx={{flexGrow: 4, display: {xs: 'none', sm: 'block'}}}>
        <img width={'100%'} height={'100%'} src={'/static/images/cup.jpg'} alt={'cup'}/>
      </Box>
      <Box sx={{p: '3rem 6rem', flexGrow: 2}}>
        <ScheduleStepper/>
      </Box>
    </Box>
  )
}
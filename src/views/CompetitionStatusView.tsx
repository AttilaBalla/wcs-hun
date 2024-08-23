import Box from "@mui/material/Box";
import Image from "next/image";
import {StatusListItem} from "@/components/status/StatusListItem";
import {Stack, ThemeProvider} from "@mui/material";
import {StatusListDivision} from "@/components/status/StatusListDivision";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {createTheme} from "@mui/material/styles";
import '@fontsource/italianno/400.css';
import '@fontsource-variable/figtree';
import {statusData} from "@/components/status/statusData";

export function CompStatusView() {

  const logoTypography = createTheme({
    typography: {
      fontFamily: "italianno",
    },
  });

  const listTypography = createTheme({
    typography: {
      fontFamily: "figtree variable",
    },
  });

  const [currentIndex, setCurrentIndex] = useState(0)

  function increaseIndex() {
    setCurrentIndex(currentIndex + 0.5)
  }

  function decreaseIndex() {
    setCurrentIndex(currentIndex - 0.5)
  }

  useEffect(() => {

    function keyDownHandler(event: globalThis.KeyboardEvent) {
      if (event.key === 'ArrowUp') {
        decreaseIndex();
      }

      if (event.key === 'ArrowDown') {
        increaseIndex();
      }
    }

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };

  })

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{position: 'relative'}}>
        <Image width={800} height={550} src={'/static/images/logo.png'} alt={'cup'}/>
        <ThemeProvider theme={logoTypography}>
          <Typography fontSize={70} sx={{position: 'absolute'}}>West Coast Swing Magyar Kupa</Typography>
        </ThemeProvider>
      </Box>
      <ThemeProvider theme={listTypography}>
        <Stack spacing={2} sx={{p: '1.5rem', flexGrow: 1}}>
          <StatusListDivision text={'19:00 Novice Prelim'} order={2} currentIndex={currentIndex}/>
          <StatusListItem text={'Heat 1'} order={1} currentIndex={currentIndex}/>
          <StatusListItem text={'Heat 2'} order={2} currentIndex={currentIndex}/>
          <StatusListDivision text={'19:30 Newcomer Prelim'} order={4} currentIndex={currentIndex}/>
          <StatusListItem text={'Heat 1'} order={3} currentIndex={currentIndex}/>
          <StatusListItem text={'Heat 2'} order={4} currentIndex={currentIndex}/>
          <StatusListDivision text={'20:00 Intermediate Prelim'} order={6} currentIndex={currentIndex}/>
          <StatusListItem text={'Heat 1'} order={5} currentIndex={currentIndex}/>
          <StatusListItem text={'Heat 2'} order={6} currentIndex={currentIndex}/>
        </Stack>
      </ThemeProvider>
    </Box>
  )
}
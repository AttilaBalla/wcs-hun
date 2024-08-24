import Box from "@mui/material/Box";
import Image from "next/image";
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
    <Box sx={{
      maxWidth: '1920px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      padding: '0 2rem'

    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image width={800} height={550} src={'/static/images/logo.png'} alt={'cup'}/>
        <ThemeProvider theme={logoTypography}>
          <Typography fontSize={70}>West Coast Swing Magyar Kupa</Typography>
        </ThemeProvider>
      </Box>
      <ThemeProvider theme={listTypography}>
        <Stack spacing={2} sx={{p: '1.5rem', flexGrow: 1}}>
          {statusData.map((item) => {
            return (
              <StatusListDivision
                key={item.text}
                text={item.text}
                status={item.status}
                heats={item.heats}
              />
            )
          })}
        </Stack>
      </ThemeProvider>
    </Box>
  )
}
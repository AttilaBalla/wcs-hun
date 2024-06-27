import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import NightlifeIcon from '@mui/icons-material/Nightlife';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const boxHeader = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

export function EventHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/images/appCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          Az esemény
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={boxHeader}>Közösség</Box>
                <Box sx={{my: '2rem'}}>
                  <GroupsIcon sx={{width: 60, height: 60}}/>
                </Box>
                <Typography variant="h5" align="center">
                  Az esemény célja, hogy egy kicsit összehozza a magyar közösséget egy jó buli és egy barátságos verseny formájában. Várunk szeretettel az első West Coast Swing Magyar Kupán, jó hangulattal, díjakkal és sok sok tánccal.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={boxHeader}>Verseny</Box>
                <Box sx={{my: '2rem'}}>
                  <EmojiEventsIcon sx={{width: 60, height: 60}}/>
                </Box>
                <Typography variant="h5" align="center">
                  Ha már ki akartad próbálni magad versenyen, de ezt egy ismerős közegben szeretnéd megtenni, barátaid társaságában, vagy szeretnéd megmérettetni magad a hazai mezőnyben, akkor itt a remek alkalom.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={boxHeader}>Buli</Box>
                <Box sx={{my: '2rem'}}>
                  <NightlifeIcon sx={{width: 60, height: 60}}/>
                </Box>
                <Typography variant="h5" align="center">
                  Természetesen nincs esemény bulizás nélkül. A verseny után DJ-ink a lehető legjobb hangulatot teremtik a szórakozáshoz egészen kora hajnalig.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Regisztráció
        </Button>
      </Container>
    </Box>
  );
}
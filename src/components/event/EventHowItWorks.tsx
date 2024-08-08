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
import {boxHeader} from "@/utils/typography";

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
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
          src={`/static/images/appCurvyLines.png`}
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" component="h2" sx={{ mb: 14 }}>
          Az esemény
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box>
                  <GroupsIcon sx={{width: 60, height: 60}}/>
                </Box>
                <Box sx={{my: '2rem'}}>
                  <Typography sx={boxHeader}>Közösség</Typography>
                </Box>
                <Typography variant="h5" align="center">
                  Az esemény célja, hogy összekovácsolja a magyar west coast swing közösséget szuper bulival és barátságos hangulatú versenyekkel. Várunk mindenkit a West Coast Swing Magyar Kupán 2024-ben is, kiváló hangulattal, tekintélyes bírói gárdával, díjakkal és persze rengeteg tánccal.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box>
                  <EmojiEventsIcon sx={{width: 60, height: 60}}/>
                </Box>
                <Box sx={{my: '2rem'}}>
                  <Typography sx={boxHeader}>Verseny</Typography>
                </Box>
                <Typography variant="h5" align="center">
                  Ha már kacérkodtál a gondolattal és szívesen megtapasztalnád a verseny adta élményt is, itt a lehetőség, ráadásul a barátaid társaságában. Szeretnéd megméretni magad a hazai közösségen belül, itt a remek alkalom.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box>
                  <NightlifeIcon sx={{width: 60, height: 60}}/>
                </Box>
                <Box sx={{my: '2rem'}}>
                  <Typography sx={boxHeader}>Buli</Typography>
                </Box>
                <Typography variant="h5" align="center">
                  Esemény buli nélkül? Azt már nem! A versenyek előtt, közben és után is a DJ-k oltári hangulatot teremtenek. Gyere nyitásra és táncolj egészen hajnalig.
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
          href={'/registration'}
          sx={{ mt: 8 }}
        >
          Regisztráció
        </Button>
      </Container>
    </Box>
  );
}
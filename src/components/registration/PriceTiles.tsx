import Box from "@mui/material/Box";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { PriceBox } from "@/components/registration/PriceBox";
import Typography from "@mui/material/Typography";

export function PriceTiles() {
  return (
      <Container
          sx={{
            mt: 5,
            mb: 5,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
      >
        <Typography variant="h4" component="h2" sx={{mb: 3}}>
          Árak
        </Typography>
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
        <Grid container spacing={2}>
          <Grid size={{xs: 12, md: 4}}>
            <PriceBox
                description={'Résztvevői (full)'}
                price={7000}
                helperText={'15:00-02:00 első 30 regisztráló'}
                variant={'red'}
            />
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <PriceBox
                description={'Résztvevői (full)'}
                price={8000}
                helperText={'15:00-02:00 31iktől - július 31ig'}
                variant={'red'}
            />
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <PriceBox
                description={'Résztvevői (full)'}
                price={9000}
                helperText={'15:00-02:00 augusztusban regisztráló és a helyszínen készpénzben'}
                variant={'red'}
            />
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <PriceBox
                description={'Résztvevői (afternoon)'}
                price={4000}
                helperText={'15:00-díjátadóig tánc csak versenyek kezdetéig, majd nézői részvétel'}
                variant={'yellow'}
            />
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <PriceBox
                description={'Nézői'}
                price={2000}
                helperText={'15:00 - díjátadóig'}
                variant={'blue'}
            />
          </Grid>
          <Grid size={{xs: 12, md: 4}}>
            <PriceBox
                description={'Verseny regisztrációs költség*'}
                price={2000}
                variant={'green'}
            />
          </Grid>
        </Grid>
        <Typography sx={{mt: 2}} variant={'body1'}>
          * Versenyzésre a Résztvevői (afternoon) hozzájárulással nincs lehetőség. Advanced és AllStar szintű
          versenyzőknek a nevezés ingyenes.
        </Typography>
      </Container>
  )
}
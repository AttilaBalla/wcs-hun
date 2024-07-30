import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FacebookIcon from '@mui/icons-material/Facebook';
import {Stack} from "@mui/material";
import Link from "@mui/material/Link";
import {imgPrefix} from "@/utils/imgPrefix";

export default function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{display: 'flex', bgcolor: 'secondary.light'}}
    >
      <Container sx={{my: 6, display: 'flex'}}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Stack direction={'row'} spacing={3} sx={{alignItems: 'center', justifyContent: 'center'}}>
              <img
                width={50}
                height={50}
                src={`${imgPrefix}/static/images/logo.png`}
                alt="logo"
              />
              <Typography variant="caption">
                © 2024 West Coast Swing Magyar Kupa
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Typography variant="caption">
                Az esemény menetrendi és egyéb változtatási jogát fenntartjuk.
              </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction={'row'} spacing={2} sx={{alignItems: 'center'}}>
              <Link href={'https://www.facebook.com/profile.php?id=61550693754475'}>
                <FacebookIcon fontSize={'large'} color="secondary"/>
              </Link>
              <Typography variant={'caption'}>
                Kövesd a facebook eseményünket, hogy ne maradj le a legfrissebb hírekről és ujdonságokról!
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider/>
      </Container>
    </Box>
  );
}
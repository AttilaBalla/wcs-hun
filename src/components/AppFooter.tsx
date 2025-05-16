import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Stack } from "@mui/material";
import Link from "@mui/material/Link";
import Image from "next/image";
import { footerYear } from "@/texts/meta";

export default function AppFooter() {
  return (
      <Box component="footer" sx={{display: 'flex', bgcolor: 'secondary.light', py: 6}}>
        <Grid container spacing={5} sx={{width: '100%'}}>
          <Grid size={{xs: 12, sm: 4}}>
            <Stack direction={'row'} spacing={1} sx={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                  width={50}
                  height={50}
                  src={'/static/images/logo.png'}
                  alt="logo"
              />
              <Typography variant="caption">
                {`West Caost Swing Magyar Kupa ${footerYear}`}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{xs: 12, sm: 4}} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
          >
            <Typography variant="caption">
              Az esemény menetrendi és egyéb változtatási jogát fenntartjuk.
            </Typography>
          </Grid>
          <Grid size={{xs: 12, sm: 4}} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Link href={'https://www.facebook.com/profile.php?id=61550693754475'}
                  target={'_blank'}
                  sx={{textDecoration: 'none'}}>
              <Stack direction={'row'} spacing={1} sx={{alignItems: 'center', justifyContent: 'center'}}>
                <FacebookIcon fontSize={'large'} color="secondary"/>
                <Typography variant={'caption'} sx={{lineHeight: 0}}>
                  Kövesd eseményünket a facebookon is!
                </Typography>
              </Stack>
            </Link>
          </Grid>
        </Grid>
        <Divider/>
      </Box>
  );
}
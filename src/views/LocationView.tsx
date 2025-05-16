'use client';

import {PageContainer} from "@/components/layouts/PageContainer";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid";
import {boxHeader, sectionTitle} from "@/utils/typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {useScreenDetector} from "@/utils/useScreenDetector";

export function LocationView() {

  const {isMobile, isTablet} = useScreenDetector();
  const mapDimensions = {
    mobile: {
      width: 300,
      height: 225
    },
    tablet: {
      width: 480,
      height: 360
    },
    desktop: {
      width: 510,
      height: 382
    },
  }

  return (
    <PageContainer>
      <Typography sx={sectionTitle}>
        Helyszín
      </Typography>
      <Typography sx={boxHeader} align="center">
        Budapest Honvéd Sportegyesület Kosárlabda csarnoka
      </Typography>
      <Typography sx={boxHeader} align="center">
        1134 Budapest, Dózsa György út 53.
      </Typography>
      <Divider sx={{mb: '1rem'}}/>
      <Grid container spacing={5}>
        <Grid size={{xs: 12, md: 6}}>
          <Box display={'flex'} sx={{justifyContent: 'center'}}>
            <ul>
              <li>
                Külön bejárat a Tüzér utca felől
              </li>
              <li>
                Hatalmas minőségi tánctér
              </li>
              <li>
                Kellemes, jól szeparált és tágas közösségi terek
              </li>
              <li>
                Ingyenes parkolási lehetőség a létesítményt övező utcákban
              </li>
              <li>
                A tömegközlekedés mellett döntők igazán sok lehetőség közül választhatnak
              </li>
            </ul>
          </Box>
          {/*<Box sx={{paddingLeft: {sx: 0, sm: '25px'}, textAlign: 'center', mt: '2rem'}}>*/}
          {/*  <Typography>*/}
          {/*    <b>A rendezvényközpontról további információ itt található:</b>*/}
          {/*  </Typography>*/}
          {/*  <Button*/}
          {/*    color="secondary"*/}
          {/*    variant="contained"*/}
          {/*    size="large"*/}
          {/*    component="a"*/}
          {/*    target='_blank'*/}
          {/*    href="http://folyondar.hu/"*/}
          {/*    sx={{minWidth: 200, my: '1rem'}}*/}
          {/*  >*/}
          {/*    Weboldal*/}
          {/*  </Button>*/}
          {/*</Box>*/}
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <Box sx={{margin: 'auto', width: 'fit-content'}}>
            <iframe
              style={{border: 'none'}}
              src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d799.9954814004194!2d19.06761032955644!3d47.52182439945834!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db8ca746601d%3A0xae0940ea854be42!2zQnVkYXBlc3QsIETDs3pzYSBHecO2cmd5IMO6dCA1MywgMTEzNA!5e1!3m2!1sen!2shu!4v1747422799160!5m2!1sen!2shu"
              width={isMobile ?
                mapDimensions.mobile.width :
                isTablet ?
                  mapDimensions.tablet.width :
                  mapDimensions.desktop.width}
              height={isMobile ?
                mapDimensions.mobile.height :
                isTablet ?
                  mapDimensions.tablet.height :
                  mapDimensions.desktop.height}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Grid>
      </Grid>
      {/*<Box sx={{position: 'relative', height: isMobile ? '250px' : '550px', mt: '2rem'}}>*/}
      {/*  <Image fill priority src={'/static/images/csarnok.png'} alt={'csarnok'}/>*/}
      {/*</Box>*/}
    </PageContainer>
  )
}
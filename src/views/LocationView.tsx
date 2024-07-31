'use client';

import {PageContainer} from "@/components/layouts/PageContainer";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid";
import {boxHeader, sectionTitle} from "@/utils/typography";
import Divider from "@mui/material/Divider";
import {Button} from "@mui/material";
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
        Folyondár Vasas Sport- és Táncközpont – 1037 Budapest, Folyondár utca 15.
      </Typography>
      <Divider sx={{mb: '1rem'}}/>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box sx={{margin: 'auto', width: 'fit-content'}}>
            <ul>
              <li>
                hatalmas tánctér és légtér méret
              </li>
              <li>
                kellemes, jól szeparálható és tekintélyes méretű közösségi terek
              </li>
              <li>
                az elkülönített, igényes, nem éppen picike parkolóban csak a miénk a terep
              </li>
              <li>
                a tömegközlekedést választók sem kerülnek hátrányba
              </li>
            </ul>
          </Box>
          <Box display={'flex'} sx={{flexDirection: 'column', alignItems: 'center', textAlign: 'center', mt: '2rem'}}>
            <Typography>
              <b>A rendezvényközpont házirendje itt található:</b>
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              component="a"
              href="http://rendezveny.folyondar.hu/rolunk/hazirend/"
              sx={{minWidth: 200, my: '1rem'}}
            >
              Házirend
            </Button>
            <Typography>
              Kérjük, hogy figyelmesen olvassátok el.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{margin: 'auto', width: 'fit-content'}}>
            <iframe
              style={{border: 'none'}}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.4885593967388!2d19.026009134697834!3d47.53462724976117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d9455fc02b13%3A0x3ca11f9a41e8cd9a!2sFolyond%C3%A1r%20Vasas%20Sport%20and%20Dance%20Center!5e0!3m2!1sen!2sat!4v1722361099958!5m2!1sen!2sat"
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
    </PageContainer>
  )
}
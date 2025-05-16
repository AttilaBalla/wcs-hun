'use client';

import { PageContainer } from "@/components/layouts/PageContainer";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { registrationLink } from "@/utils/constants";
import { TextLink } from "@/components/navigation/TextLink";
import { sectionTitle } from "@/utils/typography";
import { registrationMainDeadlines } from "@/texts/registrationView";
import React from "react";
import { PriceTiles } from "@/components/registration/PriceTiles";

export function RegistrationView() {

  return (
      <>
        <PageContainer>
          <Typography sx={{
            ...sectionTitle,
            padding: 0
          }}>
            {registrationMainDeadlines}
          </Typography>
          <ul>
            <li>
              A regisztráció táncosok és nézők részére is egységes felületen biztosított.
            </li>
            <li>
              Kedvezmény csak a Résztvevői (full) hozzájárulás költségénél vehető igénybe.
            </li>
            <li>
              Készpénzben csak a helyszínen tud minden regisztráló fizetni, ekkor kedvezmény igénybevételére már nincs
              lehetőség.
            </li>
            <li>
              Verseny kiírás részleteit a <TextLink href={'/comp'} text={'Verseny'}/> menüpont alatt találod.
            </li>
          </ul>
          <Box display={'flex'} sx={{justifyContent: 'center'}}>
            <Button
                color="secondary"
                size="large"
                variant="contained"
                component="a"
                href={registrationLink}
            >
              Regisztrációs űrlap
            </Button>
          </Box>
        </PageContainer>
        <Box
            component="section"
            sx={{display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden'}}>
          <PriceTiles/>
        </Box>
        <PageContainer>
          <Box>
            <Typography>
              Az eseményen táncosként, versenyzőként és nézőként való részvétellel, minden személy:
            </Typography>
            <ul>
              <li>
                Kijelenti, hogy megismerte, elfogadja és betartja a helyszín <TextLink
                  href={'http://rendezveny.folyondar.hu/rolunk/hazirend/'} text={'házirendjét'}/> és <TextLink
                  href={'https://drive.google.com/file/d/15mNzTVj8ThkQurizvUNrBWTAT1txTylp/view?usp=sharing'}
                  text={'tűzvédelmi szabályzatát'}/>.
              </li>
              <li>
                Elfogadja, hogy a rendezvényen kép és hangfelvétel készülhet, azokon való szerepléshez a hozzájárulását
                adja.
              </li>
              <li>
                Elfogadja, hogy az eseményen megjelentek értékeiért sem a helyszín üzemeltetője, sem a szervezők
                felelősséget nem vállalnak.
              </li>
              <li>
                Elfogadja, hogy a belépéskor kapott karszalagot a távozás pillanatáig magán kell viselnie.
              </li>
            </ul>
          </Box>
        </PageContainer>
      </>
  )
}

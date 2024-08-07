'use client';

import {PageContainer} from "@/components/layouts/PageContainer";
import Typography from "@mui/material/Typography";
import InfoIcon from '@mui/icons-material/Info';
import {PriceTable} from "@/components/registration/PriceTable";
import {Button, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {registrationLink} from "@/utils/constants";
import {TextLink} from "@/components/navigation/TextLink";
import {sectionTitle} from "@/utils/typography";
import {useScreenDetector} from "@/utils/useScreenDetector";
import {PriceTableMobile} from "@/components/registration/PriceTableMobile";

export function RegistrationView() {

  const {isMobile} = useScreenDetector();

  return (
    <PageContainer>
      <Typography sx={sectionTitle}>
        Regisztráció
      </Typography>
      <Stack spacing={3}>
        <Typography>
          Ha még nem versenyeztél, de szeretnéd kipróbálni és megtudni milyen érzés, miért ne tennéd ezt a barátaid,
          ismerőseid körében?
        </Typography>
        <Typography>
          További információkért olvasd el a <TextLink href={'/comp'} text={'Verseny'}/> és <TextLink href={'/location'} text={'Helyszín'}/> menüpontokat is!
        </Typography>
        <Box>
          {isMobile ? <PriceTableMobile/> : <PriceTable/>}
          <Typography variant={'caption'}>
            * Advanced és AllStar szintű versenyzőknek a nevezés ingyenes.
          </Typography>
        </Box>
        <Box display={'flex'} sx={{alignItems: 'center'}}>
          <InfoIcon color={'secondary'} sx={{mr: '.5rem', mb: '3px'}}/>
          <Typography>
            Elővételes regisztráció: 2024.08.15-ig, befizetés: 2024.08.16-ig
          </Typography>
        </Box>
        <Box>
          <Typography>
            Az eseményen táncosként, versenyzőként és nézőként való részvétellel, minden személy:
          </Typography>
          <ul>
            <li>
              Kijelenti, hogy megismerte, elfogadja és betartja a helyszín <TextLink href={'http://rendezveny.folyondar.hu/rolunk/hazirend/'} text={'házirendjét'}/> és <TextLink href={'https://drive.google.com/file/d/15mNzTVj8ThkQurizvUNrBWTAT1txTylp/view?usp=sharing'} text={'tűzvédelmi szabályzatát'}/>.
            </li>
            <li>
              Elfogadja, hogy a rendezvényen kép és hangfelvétel készülhet, azokon való szerepléshez a hozzájárulását adja.
            </li>
            <li>
              Elfogadja, hogy az eseményen megjelentek értékeiért sem a helyszín üzemeltetője, sem a szervezők felelősséget nem vállalnak.
            </li>
            <li>
              Elfogadja, hogy a belépéskor kapott karszalagot a távozás pillanatáig magán kell viselnie.
            </li>
          </ul>
        </Box>
        <Box display={'flex'} sx={{justifyContent: 'center'}}>
          <Button
            color="secondary"
            size="large"
            variant="contained"
            component="a"
            href={registrationLink}
            sx={{ mb: 5 }}
          >
            Regisztrációs űrlap
          </Button>
        </Box>
      </Stack>
    </PageContainer>
  )
}
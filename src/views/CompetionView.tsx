import {PageContainer} from "@/components/layouts/PageContainer";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {CategoryPanel} from "@/components/comp/CategoryPanel";
import {sectionTitle} from "@/utils/typography";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";

export function CompetitionInfo() {
  return (
    <PageContainer>
      <Typography sx={sectionTitle}>
        Verseny
      </Typography>
      <Typography>
        Idén négy szinten hirdetjük meg a versenyeket. A verseny kategóriákat a WSDC szabályainak felhasználásával
        határoztuk meg. A négy kategória a következő:
      </Typography>
      <CategoryPanel
        title={'Newcomer'}
        description={'Olyan versenyzők, akik még nem rendelkeznek WSDC ponttal, és szeretnék kipróbálni a verseny élményét. (vagy szeretnék megméretni magukat egy versenyen)'}
      />
      <CategoryPanel
        title={'Novice'}
        description={'Akik nem rendelkeznek WSDC ponttal, vagy már van pontjuk de maximum 15 Novice ponttal rendelkeznek.'}
      />
      <CategoryPanel
        title={'Intermediate'}
        description={'Akiknek minimum 16 Novice pontjuk van és maximum 29 Intermediate ponttal rendelkeznek.'}
      />
      <CategoryPanel
        title={'Advanced/Allstar'}
        description={'Akik legalább 30 intermediate ponttal rendelkeznek és vállalják a "self judge" rendszerben való versenyzést.'}
      />
      <Typography sx={sectionTitle}>
        FONTOS
      </Typography>
      <Stack spacing={2}>
        <Typography>
          A Newcomer kategória kizárólag a kezdő versenyzők kategóriája. Célunk, hogy támogassuk a kezdő versenyzőket és
          bátorítsuk a versenyzéssel kacérkodókat.
        </Typography>
        <Typography>
          <b>Másodlagos szerepben való versenyzés:</b>
        </Typography>
        <Typography>
          Csak Novice és felette lévő kategóriákban van lehetőség másodlagos szerepben való versenyzésre, a WSDC
          szabályainak figyelembevétele mellett.
        </Typography>
        <Typography>
          Egyértelműsítve, Intermediate kategóriába sorolt versenyző, Novice kategóriában, Advance/All Star kategóriába
          sorolt versenyző Intermediate kategóriában nevezhet másodlagos szerepben való megméretésre.
        </Typography>
      </Stack>
    </PageContainer>
  )
}
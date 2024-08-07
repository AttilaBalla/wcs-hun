import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {StaffCard} from "@/components/staff/StaffCard";
import {StaffAvatar} from "@/components/staff/StaffAvatar";
import Divider from "@mui/material/Divider";
import {PageContainer} from "@/components/layouts/PageContainer";
import {sectionTitle} from "@/utils/typography";

export function StaffPresentationView() {
  return (
    <PageContainer>
      <Typography sx={sectionTitle}>
        Szervezők
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <StaffCard title={'Szapper Balázs'} imgPath={'/static/images/wcs-balazs.jpg'}>
            <Typography variant="body2" color="text.secondary">
              2018 szeptemberében kezdtem el utazásom a West Coast Swing világában, akkor még el sem tudtam képzelni,
              hogy ennyire az életem fontos része lesz. Nagyon sokat kaptam ettől a tánctól és a közösségtől, így
              szeretnék vissza is adni. Remélem annyira fogjátok élvezni ezt az eseményt, mint ahogy azt megálmodtuk.
            </Typography>
          </StaffCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffCard title={'Szilágyi Bence'} imgPath={'/static/images/wcs-bence.jpg'}>
            <Typography variant="body2" color="text.secondary">
              A West Coast Swing 2017 óta része az életemnek és már az elején teljesen be is szippantott. Sosem fogom
              elfelejteni 2018 nyarát, amikor kezdőként a létező összes buliba elmentem és csak élveztem a táncot és a
              közösséget. Mindezek fényében remélem sikerül egy olyan eseményt szervezni, ahol igazán jól érezhetitek
              magatokat.
            </Typography>
          </StaffCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffCard title={'Singer-Molnár Judit'} imgPath={'/static/images/wcs-judit.jpg'}>
            <Typography variant="body2" color="text.secondary">
              2 év kacérkodás után 2017-től west coast swing függő lettem. Már feladtam, hogy újra igazán táncos lehessek, de... Félni újtól, változástól? Nem kell! Itt csak az van, hogy élménnyé válhasson. A közösség színes és vidám. Imádok szurkoló is lenni, majd megünnepelem a versenyzők sikereit egy hajnalig tartó bulival. Kívánom, hogy ezen az eseményen ti is megkapjátok azokat az élményeket, amiket igazán imádtok!
            </Typography>
          </StaffCard>
        </Grid>
      </Grid>
      <Typography sx={sectionTitle}>
        Bírák
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Balásy Ádám'} imgPath={'staff-adam.png'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Friesz Levente'} imgPath={'staff-levi.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Gombos Tímea'} imgPath={'staff-timi.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Horváth Anna'} imgPath={'staff-anna.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Jászai Zoltán'} imgPath={'staff-zoli.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Keller Brigitta'} imgPath={'staff-brigi.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Mezei Panni'} imgPath={'staff-panni.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Miskolczy Viktor'} imgPath={'staff-viktor.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Ponce Paloma'} imgPath={'staff-paloma.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Sramli Krisztina'} imgPath={'staff-krisztina.png'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Székely Bálint'} imgPath={'staff-balint.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Vajda Zsolt'} imgPath={'staff-zsolt.jpg'}/>
        </Grid>
      </Grid>
      <Divider sx={{mt: '2rem'}}/>
      <Typography sx={sectionTitle}>
        DJ-k
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Ulrich Ferenc'} imgPath={'staff-feri.png'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Szabó Gergely'} imgPath={'staff-gergely.png'}/>
        </Grid>
      </Grid>
      <Divider sx={{mt: '2rem'}}/>
      <Typography sx={sectionTitle}>
        Segítők
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Zotter Orsi'} imgPath={'staff-orsi.png'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Albert Annamária'} imgPath={'staff-annamaria.png'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Zinger Gábor'} imgPath={'staff-gabor.png'}/>
        </Grid>
      </Grid>
    </PageContainer>
  )
}
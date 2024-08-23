import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {StaffCard} from "@/components/staff/StaffCard";
import {StaffAvatar} from "@/components/staff/StaffAvatar";
import Divider from "@mui/material/Divider";
import {PageContainer} from "@/components/layouts/PageContainer";
import {sectionTitle} from "@/utils/typography";
import {introTextBalazs, introTextBence, introTextJudit} from "@/texts/staffView";

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
              {introTextBalazs}
            </Typography>
          </StaffCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffCard title={'Szilágyi Bence'} imgPath={'/static/images/wcs-bence.jpg'}>
            <Typography variant="body2" color="text.secondary">
              {introTextBence}
            </Typography>
          </StaffCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffCard title={'Singer-Molnár Judit'} imgPath={'/static/images/wcs-judit.jpg'}>
            <Typography variant="body2" color="text.secondary">
              {introTextJudit}
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
          <StaffAvatar name={'Kowalska Izabella'} imgPath={'staff-iza.jpg'}/>
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
          <StaffAvatar name={'Pártos Andrea'} imgPath={'staff-andi.jpg'}/>
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
          <StaffAvatar name={'Ulrich Ferenc'} imgPath={'staff-feri.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Szabó Gergely'} imgPath={'staff-gergely.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Fazekas Emese'} imgPath={'staff-emese.jpg'}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <StaffAvatar name={'Csonka Dorottya'} imgPath={'staff-dorottya.jpg'}/>
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
          <StaffAvatar name={'Singer Gábor'} imgPath={'staff-gabor.png'}/>
        </Grid>
      </Grid>
    </PageContainer>
  )
}
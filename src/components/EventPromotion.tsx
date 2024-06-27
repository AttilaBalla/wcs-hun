import * as React from 'react';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import EventPromotionLayout from "@/components/layouts/EventPromotionLayout";

const backgroundImage =
  '/static/images/cup.jpg';

export function EventPromotion() {
  return (
    <EventPromotionLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{display: 'none'}}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        West Coast Swing
      </Typography>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Magyar Kupa
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{mb: 4, mt: {xs: 4, sm: 10}}}
      >
        Új verseny, új móka, magyaroknak
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{minWidth: 200}}
      >
        Menetrend
      </Button>
      <Typography variant="body2" color="inherit" sx={{mt: 2}}>
        Discover the experience
      </Typography>
    </EventPromotionLayout>
  );
}
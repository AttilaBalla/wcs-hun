import React from 'react';
import {EventPromotion} from "@/components/EventPromotion";
import {EventGallery} from "@/components/EventGallery";
import {EventHowItWorks} from "@/components/EventHowItWorks";

export default function Home() {

  const isProd = process.env.NODE_ENV === 'production'
  console.log("isProd", isProd)

  return (
    <React.Fragment>
      <EventPromotion/>
      <EventHowItWorks/>
      <EventGallery/>
    </React.Fragment>
  );
}

import React from 'react';
import {EventPromotion} from "@/components/event/EventPromotion";
import {EventHowItWorks} from "@/components/event/EventHowItWorks";
import {EventImageGallery} from "@/components/event/EventImageGallery";

export default function Home() {

  return (
    <React.Fragment>
      <EventPromotion/>
      <EventHowItWorks/>
      <EventImageGallery/>
    </React.Fragment>
  );
}

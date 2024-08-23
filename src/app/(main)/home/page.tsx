import React from 'react';
import {EventPromotion} from "@/components/event/EventPromotion";
import {EventGallery} from "@/components/event/EventGallery";
import {EventHowItWorks} from "@/components/event/EventHowItWorks";

export default function Home() {

  return (
    <React.Fragment>
      <EventPromotion/>
      <EventHowItWorks/>
      <EventGallery/>
    </React.Fragment>
  );
}

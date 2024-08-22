import React from "react";
import Box from "@mui/material/Box";
import {galleryImages} from "@/utils/images";
import {ImageContainer} from "@/components/event/ImageContainer";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export function EventImageGallery() {
  return (
    <Container component="section" sx={{mt: 8, mb: 4}}>
      <Typography variant="h4" align="center" component="h2">
        Galéria
      </Typography>
      <Box sx={{mt: 8, display: 'flex', flexWrap: 'wrap'}}>
        {galleryImages.map((image) => {
          return (
            <ImageContainer imageData={image} key={image.title}/>
          )
        })}
      </Box>
    </Container>
  )
}
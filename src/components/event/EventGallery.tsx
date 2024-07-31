'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: `/static/images/gallery1.jpg`,
    title: 'gallery1',
    width: '40%',
  },
  {
    url: `/static/images/gallery2.jpg`,
    title: 'gallery2',
    width: '20%',
  },
  {
    url: `/static/images/gallery3.jpg`,
    title: 'gallery4',
    width: '40%',
  },
  {
    url: `/static/images/gallery4.jpg`,
    title: 'gallery5',
    width: '38%',
  },
  {
    url: `/static/images/gallery5.jpg`,
    title: 'gallery6',
    width: '38%',
  },
  {
    url: `/static/images/gallery6.jpg`,
    title: 'gallery7',
    width: '24%',
  },
  {
    url: `/static/images/gallery7.jpg`,
    title: 'gallery8',
    width: '40%',
  },
  {
    url: `/static/images/gallery8.jpg`,
    title: 'gallery3',
    width: '20%',
  },
  {
    url: `/static/images/gallery9.jpg`,
    title: 'gallery9',
    width: '40%',
  },
];

export function EventGallery() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" component="h2">
        Galéria
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
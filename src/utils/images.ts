import galleryImage1 from '/public/static/images/gallery1.jpg'
import galleryImage2 from '/public/static/images/gallery2.jpg'
import galleryImage3 from '/public/static/images/gallery3.jpg'
import galleryImage4 from '/public/static/images/gallery4.jpg'
import galleryImage5 from '/public/static/images/gallery5.jpg'
import galleryImage6 from '/public/static/images/gallery6.jpg'
import galleryImage7 from '/public/static/images/gallery7.jpg'
import galleryImage8 from '/public/static/images/gallery8.jpg'
import galleryImage9 from '/public/static/images/gallery9.jpg'
import {StaticImageData} from "next/image";

export interface ImageGalleryData {
  image: StaticImageData,
  title: string,
  width: string
}

export const galleryImages: ImageGalleryData[] = [
  {
    image: galleryImage1,
    title: 'gallery1',
    width: '40%',
  },
  {
    image: galleryImage2,
    title: 'gallery2',
    width: '20%',
  },
  {
    image: galleryImage3,
    title: 'gallery4',
    width: '40%',
  },
  {
    image: galleryImage4,
    title: 'gallery5',
    width: '38%',
  },
  {
    image: galleryImage5,
    title: 'gallery6',
    width: '38%',
  },
  {
    image: galleryImage6,
    title: 'gallery7',
    width: '24%',
  },
  {
    image: galleryImage7,
    title: 'gallery8',
    width: '40%',
  },
  {
    image: galleryImage8,
    title: 'gallery3',
    width: '20%',
  },
  {
    image: galleryImage9,
    title: 'gallery9',
    width: '40%',
  },
];
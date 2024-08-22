import Box from "@mui/material/Box";
import Image from "next/image";
import {ImageGalleryData} from "@/utils/images";

interface IProps {
  imageData: ImageGalleryData
}

export function ImageContainer(props: IProps) {

  const {imageData} = props;

  return (
    <Box>
      <Image
        src={imageData.image}
        alt={imageData.title}
      />
    </Box>
  )
}
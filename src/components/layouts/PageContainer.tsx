import Box from "@mui/material/Box";
import {PropsWithChildren} from "react";

export function PageContainer(props: PropsWithChildren) {

  const {children} = props;

  return (
    <Box sx={{
      maxWidth: '1400px',
      minHeight: '80vh',
      margin: 'auto',
      p: {xs: '1rem', sm: '2rem', md: '4rem 10rem'}}}>
      {children}
    </Box>
  )
}
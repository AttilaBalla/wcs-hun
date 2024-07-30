import Typography from "@mui/material/Typography";
import {categoryHeader} from "@/utils/typography";
import * as React from "react";
import Box from "@mui/material/Box";

interface IProps {
  title: string;
  description: string;
}

export function CategoryPanel(props: IProps) {

  const {title, description} = props;
  return(
    <Box sx={{px: '1rem', mt: '1rem'}}>
      <Typography sx={categoryHeader}>
        {title}
      </Typography>
      <Typography>
        {description}
      </Typography>
    </Box>
  )
}
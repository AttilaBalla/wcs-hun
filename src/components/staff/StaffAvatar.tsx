'use client';

import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import {Avatar, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {imgPrefix} from "@/utils/imgPrefix";

interface IProps {
  name: string
  imgPath?: string
}

export function StaffAvatar(props: IProps) {

  const {name, imgPath} = props;
  const theme = useTheme();

  return (
    <Box display={'flex'} sx={{alignItems: 'center', margin: '0 2rem'}}>
      <Avatar src={`${imgPrefix}${imgPath}`} sx={{backgroundColor: theme.palette.secondary.main, mr: '1rem'}}>
        {imgPath ? null : <LocalPoliceIcon/>}
      </Avatar>
      <Typography variant='subtitle2' component={'h3'}>{name}</Typography>
    </Box>
  );
}
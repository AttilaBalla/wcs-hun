'use client';

import {useTheme} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IProps {
  name: string
  imgPath?: string
}

export function StaffAvatar(props: IProps) {

  const {name, imgPath} = props;
  const theme = useTheme();

  return (
    <Box display={'flex'} sx={{alignItems: 'center', margin: '0 2rem'}}>
      <Avatar
        src={`/static/images/${imgPath}`} sx={{backgroundColor: theme.palette.secondary.main, mr: '1rem'}}
      />
      <Typography variant='subtitle2' component={'h3'}>{name}</Typography>
    </Box>
  );
}
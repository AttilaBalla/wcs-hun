import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {
  imgPath: string,
  title: string,
}

export function StaffCard(props: IProps) {

  const {imgPath, title, children} = props;

  return (
    <Card sx={{maxWidth: '40rem', minHeight: '38rem'}}>
      <CardMedia
        component="img"
        alt={title}
        height="400"
        image={imgPath}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}
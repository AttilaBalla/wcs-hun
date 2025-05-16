import React from "react";
import { Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface IProps {
  price: number;
  description: string;
  helperText?: string;
  variant: 'red' | 'green' | 'yellow' | 'blue'
}

const variants: Record<string, string> = {
  green: '#0a6a39',
  red: '#c40030',
  yellow: '#5e6a0a',
  blue: '#1d4ab7'
}


const PriceBoxItem = styled(Paper)<{colorVariant: string}>(({theme, colorVariant}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '2rem',
  borderRadius: '15px',
  minHeight: '12rem',
  //backgroundColor: theme.palette.secondary.main,
  background: `linear-gradient(135deg, ${variants[colorVariant]} , #000000e3)`,
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
}));

export function PriceBox(props: IProps) {

  const {price, description, helperText, variant} = props;

  return (
      <PriceBoxItem elevation={3} colorVariant={variant}>
        <Stack>
          <Typography color="textSecondary" variant="subtitle1">
            {description}
          </Typography>
          <Typography color="textSecondary" variant="caption" sx={{mb: 3}}>
            {helperText}
          </Typography>
        </Stack>
        <Typography color="textSecondary" variant="h5" sx={{fontWeight: 'bold'}}>
          {price} Ft
        </Typography>
      </PriceBoxItem>
  )
}
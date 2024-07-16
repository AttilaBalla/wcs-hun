import * as React from "react";
import Link from "@mui/material/Link";
import NextLink from 'next/link';

interface IProps {
  item: {
    name: string
    href: string
    primary?: boolean
  }
  key?: string
}

export function ListItemLink(props: IProps) {

  const {item} = props;

  return (
    <Link
      LinkComponent={NextLink}
      key={item.name}
      color={item.primary ? 'secondary' : 'inherit'}
      variant="h6"
      underline="none"
      href={item.href}
      sx={{
        fontSize: 16,
        ml: 3,
      }}
    >
      {item.name}
    </Link>
  )
}
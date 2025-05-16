import * as React from "react";
import NextLink from 'next/link';
import Link from "@mui/material/Link";
import { styled } from "@mui/material";
import { usePathname } from "next/navigation";

interface IProps {
  item: {
    name: string
    href: string
    disabled: boolean
  }
  key?: string
}


export function ListItemLink(props: IProps) {

  const {item} = props;
  const pathName = usePathname();

  const StyledNextLink = styled(NextLink)<{ isDisabled: boolean }>(({theme, isDisabled}) => ({
    display: 'block',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    position: 'relative',
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: '2rem',
    padding: '0.2em 0',
    overflow: 'hidden',
    transition: theme.transitions.create('color', {
      duration: theme.transitions.duration.shorter
    }),
    '&:hover': isDisabled ? {} : {
      color: theme.palette.secondary.main
    },
    '&:after': {
      content: `''`,
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '0.2em',
      backgroundColor: theme.palette.secondary.main,
      transition: theme.transitions.create(['opacity, transform'], {
        duration: theme.transitions.duration.standard
      }),
      opacity: 1,
      // -100% causes an artifact on chrome
      transform: pathName === item.href ? 'none' : 'translate3d(-101%, 0, 0)',
    },
    '&:hover:after': isDisabled ? {} : {
      transform: 'translate3d(0, 0, 0)'
    },
    '&:focus:after': isDisabled ? {} : {
      transform: 'translate3d(0, 0, 0)'
    }
  }))

  return (
      <Link
          component={StyledNextLink}
          key={item.name}
          isDisabled={item.disabled}
          color={item.disabled ? 'textDisabled' : 'inherit'}
          variant="h6"
          underline="none"
          href={item.disabled ? '' : item.href}
          sx={{
            fontSize: 15,
            ml: 3,
          }}
      >
        {item.name}
      </Link>
  )
}
import Link from "@mui/material/Link";

interface IProps {
  text: string
  href: string
}

export function TextLink(props: IProps) {

  const {text, href} = props;

  return(
    <Link href={href} color={'secondary'} sx={{textDecoration: 'none'}}>
      {text}
    </Link>
  )
}
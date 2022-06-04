import { useRouter } from 'next/router'
import Link from "next/link"

// Agregamos el objeto de estilos afuera del componente para que no siempre sea renderizado
const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({text, href}) => {

    const { asPath } = useRouter();

// Los estilos solo se le puede aplicar al <a> no al <Link>
  return (
    <Link href={href}>
        <a style={ asPath === href ? style : null }>{text}</a>
    </Link>
  )
}

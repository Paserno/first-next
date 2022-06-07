import { useRouter } from 'next/router'
import Link from "next/link"
import { CSSProperties, FC } from 'react';

// Agregamos el objeto de estilos afuera del componente para que no siempre sea renderizado
const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface FuncionProps {
  text: string;
  href: string; 
}



export const ActiveLink: FC<FuncionProps> = ({text, href}) => {

    const { asPath } = useRouter();

// Los estilos solo se le puede aplicar al <a> no al <Link>
  return (
    <Link href={href}>
        <a style={ asPath === href ? style : undefined }>{text}</a>
    </Link>
  )
}

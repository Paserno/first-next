import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


// Se puede crear una carpeta con el nombre contact/ y agregar un index.jsx para que funcione igual.

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>


      <h1 className='title'>
        {/* Ir al <a href="/">Home</a> */}
        Ir al <Link href="/">Home</Link>
      </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/contact.jsx</code>
      </p>
    </MainLayout>
  )
}

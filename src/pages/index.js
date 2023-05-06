import Head from 'next/head'
import Inicio from '../../components/Inicio'
import About from '../../components/About'
import Conhecimento from '../../components/Conhecimento'
import Projetos from '../../components/Projetos'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Pedro Soares Dias" />
        <meta name="description" content="Novo portfólio desenvolvido com o Next.JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Inicio />
        <About />
        <Conhecimento />
        <Projetos/>
      </div>
    </>
  )
}

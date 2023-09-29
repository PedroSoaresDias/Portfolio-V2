import Head from 'next/head'
import Inicio from '../../components/Inicio'
import About from '../../components/About'
import Conhecimento from '../../components/Conhecimento'
import Projetos from '../../components/Projetos'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Soares Dias</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Pedro Soares Dias" />
        <meta name="description" content="Trabalhando no desenvolvimento web para resolver problemas das pessoas, faço sites com o maior desempenho possível, uma boa acessibilidade para os usuário, um bom desempenho para os motores de busca" />
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

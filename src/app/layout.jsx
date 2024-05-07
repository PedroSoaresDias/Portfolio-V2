import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import "aos/dist/aos.css";
import { Roboto_Mono } from "next/font/google";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BootstrapClient from '../../components/BootstrapClient';
import AosClient from '../../components/AosClient';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata = {
    title: "Pedro Soares Dias",
    description: "Trabalhando no desenvolvimento web para resolver problemas das pessoas, faço sites com o maior desempenho possível, uma boa acessibilidade para os usuário, um bom desempenho para os motores de busca."
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                ></link>
            </head>
            <body className={robotoMono.className}>
                <Navbar />
                {children}
                <BootstrapClient />
                <AosClient />
                <Footer />
            </body>
        </html>
    )
}
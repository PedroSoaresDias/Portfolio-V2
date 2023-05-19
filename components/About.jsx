import Image from "next/image";
import profile from "../public/Image/foto-perfil.jpg"

export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="row align-items-center">
          <div className="col p-3">
            <div className="perfil">
              <Image src={profile} alt="foto de perfil" className="img"/>
            </div>
          </div>
          <div className="col p-3">
            <div className="info">
              <h3 className="text-center">Quem sou eu?</h3>
              <br />
              <h4 className="text-center">Sobre mim</h4>
              <br />
              <p>
                No começo do ano de 2022, comecei a fazer o curso de Análise
                e Desenvolvimento de Sistemas, meus objetivos são aprender novas habilidades, fazer networking, conseguir meu primeiro emprego ou trabalhar como freelancer, eu aprendi novas habilidades e fiz networking com pessoas dentro e fora do curso.
              </p>
              <br />
              <p>
                A primeira linguagem de programação que eu comecei a usar, foi a
                linguagem C#, ela foi utilizada para conhecer sobre a lógica de
                programação, no começo levou algum tempo para entender como
                funciona a linguagem de programação, e com o tempo me acostumei e também usando ela.
              </p>
              <br />
              <p>
                Depois de conhecer a lógica de programação, comecei a me
                aprofundar sobre a linguagem C# quando estava no 2º semestre da
                faculdade e também de alguns cursos fora, e logo
                depois, tive contato com o desenvolvimento web utilizando o
                HTML, CSS, JavaScript e o ASP.NET, isso me fez ficar interessado
                na área de programação para a web, e com o tempo, fiz alguns
                projetos utilizando essas tecnologias.
              </p>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col p-4">
            <div class="info">
              <h3 class="text-center">Quem sou eu?</h3>
              <br />
              <h4 class="text-center">Sobre mim</h4>
              <br />
              <p>
                No começo do ano de 2022, comecei a fazer o curso de Análise
                e Desenvolvimento de Sistemas, meus objetivos são aprender novas habilidades, fazer networking, conseguir meu primeiro emprego ou trabalhar como freelancer, eu aprendi novas habilidades e fiz networking com pessoas dentro e fora do curso.
              </p>
              <br />
              <p>
                A primeira linguagem de programação que eu comecei a usar, foi a
                linguagem C#, ela foi utilizada para conhecer sobre a lógica de
                programação, no começo levou algum tempo para entender como
                funciona a linguagem de programação, e com o tempo me acostumei e também usando ela.
              </p>
              <br />
              <p>
                Depois de conhecer a lógica de programação, comecei a me
                aprofundar sobre a linguagem C# quando estava no 2º semestre da
                faculdade e também de alguns cursos fora, e logo
                depois, tive contato com o desenvolvimento web utilizando o
                HTML, CSS, JavaScript e o ASP.NET, isso me fez ficar interessado
                na área de programação para a web, e com o tempo, fiz alguns
                projetos utilizando essas tecnologias.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

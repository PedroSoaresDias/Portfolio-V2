import Image from "next/image";

export default function Conhecimento() {
  return (
    <section id="conhecimento">
      <div className="row">
        <div className="col p-2">
          <div className="card bg-dark card-skills text-light">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
              alt="C-Sharp"
              className="card-img-top svg p-1"
              width={85}
              height={85}
            />
            <div className="card-body">
              <h5 className="card-title text-center">C-Sharp</h5>
              <p className="card-text">
                O C# foi desenvolvido pela Microsoft para usar o paradigma
                orientada a objetos e faz parte do ecossistema .NET.
              </p>
              <a
                href="https://learn.microsoft.com/pt-br/dotnet/csharp/"
                className="btn btn-primary"
                target="_blank"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
        <div className="col p-2">
          <div className="card bg-dark card-skills text-light">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              alt="HTML"
              className="card-img-top svg p-1"
              width={85}
              height={85}
            />
            <div className="card-body">
              <h5 className="card-title text-center">HTML</h5>
              <p className="card-text">
                O HTML é uma linguagem de marcação utilizada para criar
                estruturas na web e renderizado nos navegadores.
              </p>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                className="btn btn-primary"
                target="_blank"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
        <div className="col p-2">
          <div className="card bg-dark card-skills text-light">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              alt="CSS"
              className="card-img-top svg p-1"
              width={85}
              height={85}
            />
            <div className="card-body">
              <h5 className="card-title text-center">CSS</h5>
              <p className="card-text">
              O CSS é uma linguagem de estilização utilizado para personalizar o HTML deixando mais visualmenta agradavel.
              </p>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                className="btn btn-primary"
                target="_blank"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
        <div className="col p-2">
          <div className="card bg-dark card-skills text-light">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              className="card-img-top svg p-1"
              width={85}
              height={85}
            />
            <div className="card-body">
              <h5 className="card-title text-center">Bootstrap</h5>
              <p className="card-text">
              O Bootstrap é um Framework CSS que pode agilizar o desenvolvimento e deixar responsivo, também utiliza JavaScript.
              </p>
              <a
                href="https://getbootstrap.com/"
                className="btn btn-primary"
                target="_blank"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

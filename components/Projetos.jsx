import { dataProjects } from "../src/app/api/dataProjects.js";
import Image from "next/image";

export default function Projetos() {
  return (
    <section id="projetos">
      <div className="container" data-aos='fade-up'>
        <div className="grid-project">
          {dataProjects &&
            dataProjects.map((project) => (
              <div className="card bg-dark cartao text-light" key={project.id}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  className="card-img image p-1"
                  width={1920}
                  height={1080}
                  quality={75}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    className="btn btn-outline-light"
                  >
                    <i className="bi bi-github"> Código</i>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

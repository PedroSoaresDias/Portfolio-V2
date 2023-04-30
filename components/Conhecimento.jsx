import Image from "next/image";
import { dataSkills } from "../src/pages/api/dataSkills.js";

export default function Conhecimento() {
  return (
    <section id="conhecimento">
      <div className="container">
        <div className="grid-skill">
          {dataSkills &&
            dataSkills.map((skill) => (
              <div
                className="card bg-dark card-skills text-light"
                key={skill.id}
              >
                <Image src={skill.image} alt={skill.alt} />
                <div className="card-body">
                  <h5 className="card-title text-center">{skill.title}</h5>
                  <p className="card-text">{skill.description}</p>
                  <a
                    href={skill.url}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

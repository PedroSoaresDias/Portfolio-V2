export default function Footer() {
  return (
    <footer>
      <p className="text-light text-center">© {new Date().getFullYear()} Pedro Soares Dias</p>
      <br />
      <div className="text-center">
        <a
          href="https://www.linkedin.com/in/pedro-soares-dias/"
          className="btn btn-primary m-3"
          target="_blank"
        >
          <i className="bi bi-linkedin"></i> Linkedin
        </a>
        <a
          href="https://github.com/PedroSoaresDias"
          className="btn btn-outline-light m-3"
          target="_blank"
        >
          <i className="bi bi-github"> GitHub</i>
        </a>
      </div>
    </footer>
  );
}

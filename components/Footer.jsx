export default function Footer() {
  return (
    <footer>
      <p class="text-light text-center">© {new Date().getFullYear()} Pedro Soares Dias</p>
      <br />
      <div class="text-center">
        <a
          href="https://www.linkedin.com/in/pedro-soares-dias/"
          class="btn btn-primary mx-2"
          target="_blank"
        >
          <i class="bi bi-linkedin"></i> Linkedin
        </a>
        <a
          href="https://github.com/PedroSoaresDias"
          class="btn btn-outline-light mx-2"
          target="_blank"
        >
          <i class="bi bi-github">GitHub</i>
        </a>
      </div>
    </footer>
  );
}

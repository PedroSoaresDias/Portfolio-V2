export default function Navbar() {
    return (
        <nav id="nav-bar" className="navbar navbar-expand-lg navbar-dark bg-dark list p-3">
        <div className="container-fluid">
            <div className="logo">
                <h1><i class="bi bi-code"></i> Pedro Dias</h1>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
                    <li className="nav-item">
                        <a className="nav-link" href="#inicio">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#sobre">Sobre mim</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#conhecimento">Conhecimento</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projetos">Projetos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
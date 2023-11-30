import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">Ruchi Blog</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/react-coding">React Coding Questions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/redux-toolkit">Redux Toolkit</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
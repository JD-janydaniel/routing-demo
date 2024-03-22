import {Link} from "react-router-dom"
function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid ">
      <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link  to={"/"} className="nav-link active" >
              Home
            </Link>
            <Link to={"/about"} className="nav-link" >
              About us
            </Link>
            <Link to={"/products"}className="nav-link" >
              Products 
            </Link>
            <Link to={"/blog/politics"}className="nav-link" >
              Blogs 
            </Link>
            <Link to={"/contact"} className="nav-link " >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;

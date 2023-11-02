import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Header () {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          ASTROLABE
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Centered Items */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#"  style={{padding:"0px 26px 0px 26px"}}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{padding:"0px 26px 0px 26px"}}>
                Profiles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  style={{padding:"0px 26px 0px 26px"}}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  style={{padding:"0px 26px 0px 26px"}}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  style={{padding:"0px 26px 0px 26px"}}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  style={{padding:"0px 26px 0px 26px"}}>
                Language
              </a>
            </li>
          </ul>
          
          {/* Right-aligned Login and Register buttons */}
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="#">
              <button id='sign-in-btn' className='btn'>Sign In</button>
            </a>
            <a className="nav-item nav-link" href="#">
              <button id='join-btn' className='btn btn-success'>Join</button>
            </a>
          </div>
        </div>
      </div>
    </nav>

    );
}

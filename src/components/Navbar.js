import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from '../img/logo.png';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="head card">
      <ul>
      <Link to="/About"> <img className="logo" src={logo} alt="Logo" /> </Link>
        <CustomLink to="/About" className="heading">About</CustomLink>
        <CustomLink to="/Portfolio" className="heading">Portfolio</CustomLink>
        <CustomLink to="/Contact" className="heading">Contact</CustomLink>
        <CustomLink to="/Resume" className="heading">Resume</CustomLink>
      </ul>
    </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}




// import React from 'react';
// import '../styles/Navbar.css';


// function Navbar() {
//   return (
//     <div style={styles.card}>
//       <div style={styles.heading}>About</div>
//       <div style={styles.heading}>Portfolio</div>
//       <div style={styles.heading}>Contact</div>
//       <div style={styles.heading}>Resume</div>
//     </div>
//   );
// }

// export default Navbar;

import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="card">
    <nav>
      <Link to="/" className="site-title">
       LOGO
      </Link>
      <ul>
        <CustomLink to="/About" className="heading">About</CustomLink>
        <CustomLink to="/Portfolio" className="heading">Portfolio</CustomLink>
        <CustomLink to="/Contact" className="heading">Contact</CustomLink>
        <CustomLink to="/Resume" className="heading">Resume</CustomLink>
      </ul>
    </nav>
    </div>
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

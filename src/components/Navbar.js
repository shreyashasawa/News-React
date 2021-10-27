import React from 'react'
import { bubble as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <Menu>
        <ul className="nav-menu">
          <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav-link">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav-link">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/technology" className="nav-link">
                Technology
              </Link>
            </li>
          </ul>
      </Menu>
    </div>
  )
}
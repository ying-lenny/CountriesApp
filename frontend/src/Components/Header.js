import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="header">
					<Link className="header-link" target="_blank" to='https://countriesapp-ggwg.onrender.com/'>Live Backend page</Link>
          <Link className="header-link" target="_blank" to='https://github.com/ying-lenny/CountriesApp'>Github Repo</Link>
        </div>
      </nav>
    </header>
  )
}
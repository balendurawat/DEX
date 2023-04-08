import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className = "leftH">
        <Link to ="/" className="link">
          <div className = "headerItem">Swap</div>
        </Link>
        <Link to ="/tokens" className="link">
          <div className = "headerItem">Tokens</div>
        </Link>

      </div>

      <div className = "rightH">

        <div className = "headerItem">Ethereum</div>
        <div className = "connectButton">Connect</div>

      </div>
      
    </header>
  )
}

export default Header
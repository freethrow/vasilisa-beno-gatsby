import React from 'react'
import {Link} from 'gatsby'



function Header() {
    return (
        <div className="flex flex-row justify-between w-full py-8">
            <Link to="/"><h1 className="text-themeOrange">Vasilisa Beno Photography</h1></Link>
            <nav>
                <ul className="list-none flex flex-row justify-between">
                    <li className="mx-2.5"><Link to="/">Home</Link></li>
                    <li className="mx-2.5"><Link to="/galleries">Galleries</Link></li>
                    <li className="mx-2.5"><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

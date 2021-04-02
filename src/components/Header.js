import React from 'react'
import {Link} from 'gatsby'



function Header() {
    return (
        <div className="flex flex-col justify-center w-full py-8 text-center md:flex-row md:justify-between">
            <Link to="/"><h1 className="mb-10 text-xl md:text-base flex flex-row justify-between">
                
            <span className="opacity-80 mt-8 z-10 px-1">Vasilisa Beno</span> 
            
            <span className="text-themeOrange opacity-20 font-extrabold text-7xl absolute z-0 p-0">Rust Art</span>
            
            </h1></Link>
            <nav>
                <ul className="list-none flex flex-row justify-between text-sm">
                    <li className="md:mx-2.5 transition duration-700 hover:text-themeOrange transform
                     hover:scale-110 
                    "><Link to="/">Home</Link></li>
                    <li className="md:mx-2.5 transition duration-700 hover:text-themeOrange transform
                     hover:scale-110"><Link to="/galleries">Galleries</Link></li>
                    <li className="md:mx-2.5 transition duration-700 hover:text-themeOrange transform
                     hover:scale-110"><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

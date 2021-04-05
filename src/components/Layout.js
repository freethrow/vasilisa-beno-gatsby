import React from 'react'

import Header from './Header'
import Footer from './Footer'


const Layout = (props) => {
    

    
    return (
        <div className="container mx-auto md:px-10 max-w-6xl min-h-screen flex flex-col justify-items-stretch">
            <Header/>

           
            <main className="flex-1 py-10">
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout

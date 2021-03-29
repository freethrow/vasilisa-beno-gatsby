import React from 'react'


import Header from './Header'
import Footer from './Footer'


const Layout = (props) => {
    return (
        <div className="container mx-auto max-w-7xl min-h-screen flex flex-col justify-items-stretch">
            <Header/>
            <main className="flex-1">
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout

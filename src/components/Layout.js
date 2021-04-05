import React from 'react'
import { SEO, useSEO } from "gatsby-plugin-seo";


import Header from './Header'
import Footer from './Footer'


const Layout = (props) => {
    
    <SEO
    title="Vasilisa Beno Digital Art"
    description="Rust Art Digital Photography"
    pagePath="/"
    schema={`{
          "@context": "http://schema.org",
          "@type": "WebPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Vasilisa Beno Rust Art"            
          }
        }`}
  />
    
    return (
        <div className="container mx-auto px-10 max-w-6xl min-h-screen flex flex-col justify-items-stretch">
            <Header/>

           
            <main className="flex-1 py-10">
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout

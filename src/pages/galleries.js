import React from 'react'
import Layout from '../components/Layout'
import { getImage } from "gatsby-plugin-image"
import {Link, graphql} from 'gatsby'
import SEO from '../components/SEO'
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image'


const galleries = ({data}) => {

    const {allContentfulGallery: { nodes: galleries}} = data;

    

    return (

        <Layout>
                <SEO 
        title="Vasilisa Beno Rust Art Galleries"
      />
          <Link to={'/galleries'}>
        <h1
          className=" text-themeOrange opacity-20 font-extrabold text-7xl text-right mr-2"
        >Galleries</h1>
      </Link>
      <div className="my-12 text-gray-500 font-thin mx-2.5 text-sm md:mx-0">
        The images are open to interpretationa and they are grouped in galleries just for convinience. 
        There is no real order or hierarchy.
      </div>
        <div className="divider my-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
         

          {galleries.map((gallery)=>{
              // get cover image
              const image = getImage(gallery.cover.gatsbyImageData)
              const bgImage = convertToBgImage(image)

              return (
                <Link to={`/galleries/${gallery.slug}`}>
                  <div className="galleryCOntainer p-4 self-center self-center" key={gallery.id}>
                    <BackgroundImage
                      Tag="section"
                      className="homeSection flex flex-col justify-center items-center overflow-hidden transition duration-500 transform hover:scale-105"
                      {...bgImage}
                      preserveStackingContext
                    >
                      <h2
                        className=" text-white shadow-2xl-700 p-4 border-white border-solid border-2 font-thin text-2xl transition duration-500 transform hover:scale-105"
                    >{gallery.title}</h2>
            
                    </BackgroundImage>
                  </div>
                  </Link>
                  
              )
          })}
      
      </div>
        </Layout>
        
      )
}
export const query = graphql`
  {
    allContentfulGallery(sort: {fields: priority, order: DESC}) {
        nodes {
          priority
          slug
          cover {
            gatsbyImageData(height:300)
          }
          title
          
          description {
            internal {
              content
            }
          }
        }
      }
  }
`
export default galleries

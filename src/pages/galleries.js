import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Link, graphql} from 'gatsby'


const galleries = ({data}) => {

    const {allContentfulGallery: { nodes: galleries}} = data;

    

    return (

        <Layout>
          <h1 className="text-center">Galleries Page</h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
         

          {galleries.map((gallery)=>{
              // get cover image
              const image = getImage(gallery.cover.gatsbyImageData)

              return (
                  <div 
                    key={gallery.id}
                    className="p-4 mx-auto text-center">
                    <h2
                        className="text-red-800 hover:text-red-600"
                    ><Link to={`/galleries/${gallery.slug}`}>{gallery.title}</Link></h2>
                   
                    <GatsbyImage
                        image={image}
                        className="p-8"
                         />
                     <p>{gallery.description.internal.content}</p>
                  </div>
              )
          })}
      
      </div>
        </Layout>
        
      )
}
export const query = graphql`
  {
    allContentfulGallery {
      nodes {
        slug
        cover {
          gatsbyImageData(height: 720)
          
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

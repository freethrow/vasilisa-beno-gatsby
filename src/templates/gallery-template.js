import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import {Link} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

const galleryTemplate = ({ data:{
    gallery:{
        title,
        description,
        images
    }
} }) => {

    return (
    <Layout>
        <Link to="/galleries">back to galleries</Link>
        <h1>{title}</h1>
        <div>{description.internal.content}</div>

        {images.map((image)=>{
            
             

              return (
                  <div 
                    key={image.id}
                    className="p-4">
                        <GatsbyImage
                            image={image.gatsbyImageData}
                            className="p-8 border-2 border-black"
                        />
                  </div>
              )
          })}
       
    </Layout>)
}


export const query = graphql`
query GetGallery($slug: String) {
    gallery:contentfulGallery(slug: {eq: $slug}, images: {}) {
      id
      title
      images {
        id
        gatsbyImageData
        fluid(resizingBehavior: CROP) {
          src
          aspectRatio
        }
      }
      description {
        internal {
          content
        }
      }
    }
  }
`

export default galleryTemplate
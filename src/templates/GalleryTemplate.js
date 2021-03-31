import React, {useState} from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import {Link} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const GalleryTemplate = ({ data:{
    gallery:{
        title,
        description,
        images
    }
} }) => {

    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

   

    const pics=images.map((image)=>{
      return image.gatsbyImageData.images.fallback.src
    })





    return (
    <Layout>
        <section 
        className="container mx-auto text-gray-500 font-thin">
      
        <h1>{title}</h1>
        <div className="my-12">{description.internal.content}</div>

    { isOpen &&      
    <Lightbox
        mainSrc={pics[index]}
        nextSrc={pics[(index + 1) % pics.length]}
        prevSrc={pics[(index + pics.length - 1) % pics.length]}
        onCloseRequest={() => setOpen(false)}
        onMovePrevRequest={() =>
          setIndex((index + pics.length - 1) % pics.length)
        }
        onMoveNextRequest={() =>
          setIndex((index + 1) % pics.length)
        }
  />}




        <div className="md:grid md:grid-cols-3 md:gap-12 mx-auto text-center">
        {images.map((image, index)=>{
            
       
             

              return (
                  <div 
                    key={image.id}
                    className="flex flex-col items-center justify-start ">
                        <GatsbyImage
                            onClick={() => {
                              setOpen(true)
                              setIndex(index)
                            }}
                            image={image.gatsbyImageData}
                            className="transition duration-500 transform hover:scale-105 
                            
                             border-solid border-8"
                            
                            
                        />

                       
                  </div>
              )
          })}
        </div>
        </section>
    </Layout>)
}


export const query = graphql`
query GetGallery($slug: String) {
    gallery:contentfulGallery(slug: {eq: $slug}, images: {}) {
      id
      title
      images {
        id
        gatsbyImageData(
        
         placeholder: BLURRED
        )
       
      }
      description {
        internal {
          content
        }
      }
    }
  }
`

export default GalleryTemplate
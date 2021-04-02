import React, {useState} from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'

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
        className="text-gray-500 font-thin">
      
        <h1
          className=" text-themeOrange opacity-20 font-extrabold text-7xl text-right"
        >{title}</h1>
        <div className="my-12">{description.internal.content}</div>
        <div className="divider my-6"></div>

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




        <div className="md:grid lg:grid-cols-3 md:gap-12 text-center md:grid-cols-2">
        {images.map((image, index)=>{
            
       
             

              return (
                  <div 
                    key={image.id}
                    className="flex flex-col 
                     my-4 items-center justify-start p-2 bg-white max-w-sm
        
                    border-gray-200 border-solid border-t-2 border-l-2 border-r-2 transition duration-500 transform hover:scale-105">
                        <GatsbyImage
                            onClick={() => {
                              setOpen(true)
                              setIndex(index)
                            }}
                            image={image.gatsbyImageData}
                            className="cursor-pointer"
                            
                            
                        />

                       
                  </div>
              )
          })}
        </div>
        <div className="divider my-6"></div>
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
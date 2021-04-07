import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { GatsbyImage } from "gatsby-plugin-image"

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const GalleryTemplate = ({ data:{
    gallery:{
        title,
        slug,
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
      <SEO 
        title={`${title} gallery - Rust Art Vasilisa Beno`}
        description={`Abstract Digital Art Rust Vasilisa Beno Gallery theme ${title}`}
      />
        <section 
        className="text-gray-500 font-thin">
      
      <Link to={`/galleries/${slug}`}>
        <h1
          className=" text-themeOrange opacity-20 font-extrabold text-7xl text-right mr-2"
        >{title}</h1>
      </Link>
        <div className="my-12 text-center">{description.internal.content}</div>
        <div className="divider my-6 px-6 mx-auto"></div>

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
                   
                    transition duration-500 transform hover:scale-105"
            
                    >
                      <div className="border-gray-200 border-solid  border-2 p-2">
                        <GatsbyImage
                            onClick={() => {
                              setOpen(true)
                              setIndex(index)
                            }}
                            image={image.gatsbyImageData}
                            alt="Vasilisa Beno Abstract Art Rust"
                            className="cursor-pointer "
                            
                            
                        />
                        </div>

                       
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
      slug
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
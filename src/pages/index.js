import * as React from "react"
import Layout from '../components/Layout'

import {graphql, useStaticQuery} from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image'
// markup
const IndexPage = ({data}) => {

 
  
const {bgImage1} = useStaticQuery(
  graphql`
  query{
    bgImage1:allContentfulFrontpage(limit: 1) {
      edges {
        node {
          mainHeadline
          backgroundImage {
            gatsbyImageData(width: 2000, quality: 50, formats: WEBP, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
  `
  )

  console.log("IMAGE",bgImage1.edges[0].node.backgroundImage)
  
  const image = getImage(bgImage1.edges[0].node.backgroundImage)
  const bgImage = convertToBgImage(image)

  return (

    <Layout>
    
      
      <BackgroundImage
        Tag="section"
        className="homeSection flex flex-col justify-center items-center"
        {...bgImage}
        preserveStackingContext
      >
     <h1 className="text-white shadow-2xl text-6xl">Rust Art</h1>
      </BackgroundImage>

    
    </Layout>

    
  )
}



export default IndexPage

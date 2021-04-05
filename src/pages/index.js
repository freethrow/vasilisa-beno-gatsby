import * as React from "react"
import Layout from '../components/Layout'

import {graphql, Link, useStaticQuery} from 'gatsby'
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
    
      <Link to="/galleries">
      <BackgroundImage
        Tag="section"
        className="homeSection flex flex-col justify-center items-center"
        {...bgImage}
        preserveStackingContext
      >
      <div className="p-8">
     <h1 className="text-white shadow-2xl text-6xl border-b-2 border-solid">Rust Art</h1>
     <p className="text-white tracking-wider font-thin transition transform hover:rotate-3">if rust could speak, these are the tales we would hear</p>
     </div>
      </BackgroundImage>
      </Link>
    
    </Layout>

    
  )
}



export default IndexPage

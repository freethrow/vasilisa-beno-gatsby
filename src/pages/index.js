import * as React from "react"
import Layout from '../components/Layout'

import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const IndexPage = ({data}) => {

 

  const dataObject = data.allContentfulFrontpage.edges[0].node

  

  console.log(dataObject);

  return (

    <Layout>
    
      <h1>Home Page</h1>

    
    </Layout>

    
  )
}

export const query = graphql`
{
  allContentfulFrontpage(limit: 1) {
    edges {
      node {        
        backgroundImage {
          file {
            fileName
            url
          }
        }
        mainHeadline
      }
    }
  }
}
`


export default IndexPage

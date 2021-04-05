import React from 'react'
import Layout from '../components/Layout'
import {graphql, Link} from 'gatsby'
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import { MARKS } from "@contentful/rich-text-types"





const AboutPage = ({data}) => {

  const Bold = ({ children }) => <span className="boldIt">{children}</span>;

 
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>
    },


    
  };
  
   
    const aboutText = data.about.edges[0].node.aboutText

    console.table(aboutText, options)
    return (

        <Layout>
           <Link to={'/about'}>
        <h1
          className=" text-themeOrange opacity-20 font-extrabold text-7xl text-right"
        >About</h1>
      </Link>
          <div className="text-gray-400 font-thin my-4 aboutText">
          {renderRichText(aboutText, options)}
          </div>
   
        </Layout>
        
      )
}



export default AboutPage

export const query = graphql`
  query{
    about:allContentfulAbout(limit: 1) {
      edges {
        node {
          aboutText{
            raw
          }
        }
      }
    }
  }
`

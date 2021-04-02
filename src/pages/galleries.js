import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Link, graphql} from 'gatsby'


const galleries = ({data}) => {

    const {allContentfulGallery: { nodes: galleries}} = data;

    

    return (

        <Layout>
          <Link to={'/galleries'}>
        <h1
          className=" text-themeOrange opacity-20 font-extrabold text-7xl text-right"
        >Galleries</h1>
      </Link>
      <div className="my-12">Galleries are just a way of grouping stuff together.</div>
        <div className="divider my-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
         

          {galleries.map((gallery)=>{
              // get cover image
              const image = getImage(gallery.cover.gatsbyImageData)

              return (
                  <div 
                    key={gallery.id}
                    className="mx-auto text-center  w-full
                    flex flex-col justify-start items-start
                    
                    ">
                    <h2
                        className="text-red-800 hover:text-red-600 opacity-50 my-6"
                    ><Link to={`/galleries/${gallery.slug}`}>{gallery.title}</Link></h2>
                   
                   <Link to={`/galleries/${gallery.slug}`}>
                    <GatsbyImage
                        image={image}
                    />
                    </Link>
                    
                     <p className="text-gray-400">{gallery.description.internal.content}</p>
                  </div>
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
            gatsbyImageData(height: 600)
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

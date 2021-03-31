const path = require('path');

exports.createPages = async ({graphql, actions})=>{
    const {createPage} = actions
    const result = await graphql(`
    query GetGalleries {
        galleries:allContentfulGallery {
          nodes {
            slug     
          }
        }
      }      
    `)
    result.data.galleries.nodes.forEach((gallery)=>{
        createPage({
            path:`/galleries/${gallery.slug}`,
            component:path.resolve(`src/templates/GalleryTemplate.js`),
            context:{
                slug:gallery.slug,
            }
        })
    })
};
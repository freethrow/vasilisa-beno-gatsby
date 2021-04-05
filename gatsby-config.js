module.exports = {
  siteMetadata: {
    title: "Vasilisa Beno",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "REYeTVTqCiJL-S7aJdB5eQ5lsuwvlTigAiX7v5kOsBA",
        spaceId: "nihe1h4kna1o",
      },
    },
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",

    "gatsby-plugin-react-helmet",
  
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-seo",
      options: {
        siteName: "Vasilisa Beno Rust Art",
        defaultSiteImage: "/img/logo.png",
        siteUrl: "https://www.vasilisabeno.site",
        
        globalSchema: `{
            "@type": "WebSite",
            "@id": "https://www.vasilisabeno.site",
            "url": "https://www.vasilisabeno.site",
            "name": "Vasilisa Beno Rust Art",
            "publisher": {
              "@id": "https://www.vasilisabeno.site"
            }
          }`
      }
    },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images-contentful`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
          },
        },
      ],
    },
  },
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Montserrat:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};

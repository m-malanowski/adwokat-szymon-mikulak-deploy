/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "⚖️ Kancelaria Adwokacka Szymon Mikulak, Adwokat Gdynia",
    description: "Zadzwoń ☎ 506 494 453. Adwokat Gdynia - sprawy cywilne, sprawy karne, sprawy rodzinne, rozwód, dobra osobiste, porady prawne, kontakty z dziećmi, alimenty, odszkodowanie, obrońca",
    author: "LUMINA.STUDIO",
    twitterUsername: "@mat",
    image: "/twitter-img.png",
    siteUrl: "https://adwokatmikulak.pl",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://strapi-adwokat-mikulak.herokuapp.com`,
        queryLimit: 1000,
        contentTypes: ['blogs'],
        singleTypes: ['private-policy'],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-9H4FW9GSER" // Google Analytics / GA
        ],
      },
    },
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "⚖️ Kancelaria Adwokacka Szymon Mikulak, Adwokat Gdynia",
    description: "Zadzwoń ☎ 606 502 202. Adwokat Gdynia - sprawy cywilne, sprawy karne, sprawy rodzinne, rozwód, dobra osobiste, porady prawne, kontakty z dziećmi, alimenty, odszkodowanie, obrońca",
    author: "LUMINA.STUDIO",
    twitterUsername: "@mat",
    // image: "/twitter-img.png",
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kancelaria Adwokacka Szymon Mikulak`,
        short_name: `Szymon Mikulak`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1f3d38`,
        display: `standalone`,
        icon: `src/assets/imgs/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

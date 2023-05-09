require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "http://www.viblio.com",
    title: "Ciao mi chiamo Viblio",
    description: "Sono una guida per il tuo percorso di apprendimento nell’universo della conoscenza."
  },
  plugins: [
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/viblio-favicon.svg",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-sass",
    {
    resolve: 'gatsby-plugin-iubenda-cookie-footer',
    options: {
      iubendaOptions: {"lang":"it","siteId":3063071,"cookiePolicyId":69014013, /* ... */ },
    }
  },
  ],
}

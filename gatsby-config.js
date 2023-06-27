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
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
      languages: [`en`, `it`],
      defaultLanguage: `en`,
      siteUrl: `https://viblio.com`,
      // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
      trailingSlash: 'always',
      // you can pass any i18next options
      i18nextOptions: {
        interpolation: {
          escapeValue: false // not needed for react as it escapes by default
        },
        keySeparator: false,
        nsSeparator: false
      },
      pages: [
        {
          matchPath: '/:lang?',
          getLanguageFromPath: true,
          excludeLanguages: ['en']
        },
      ]
      }
    
  },
  ],
}

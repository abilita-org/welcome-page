require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "http://www.viblio.com",
    title: "viblio",
  },
  plugins: [
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
      resolve: "gatsby-plugin-mailchimp",
      options: {
        // string; add your MC list endpoint here; see instructions below
        endpoint: process.env.MAIL_CHIMP,
        // endpoint:
        //   "https://viblio.us20.list-manage.com/subscribe/post?u=132f83383ff12cb307ffa8aa1&amp;id=a3aff715f3",
        // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        timeout: 3500,
      },
    },
  ],
}

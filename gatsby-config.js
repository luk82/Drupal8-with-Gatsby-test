module.exports = {
  siteMetadata: {
    title: 'Drupal 8 - Gatsby',
  },
  plugins: [
  {
    resolve: `gatsby-source-drupal`,
    options: {
      baseUrl: `http://192.168.100.104/`,
      apiBase: `api`,
    },
  },
  ]
}

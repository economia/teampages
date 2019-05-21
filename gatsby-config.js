module.exports = {
  siteMetadata: {
    title: 'Ecodevs webpage',
    author: 'Economia a.s.',
    description: 'We are the Ecodevs and this is our daily routine.',
    siteUrl: '', // TODO: Add real url
    social: {
      twitter: '', // TODO: Add twitter
    },
  },
  plugins: [
    'gatsby-plugin-less',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-component',
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // TODO: Get GA ID
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}

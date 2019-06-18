/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        siteUrl: `https://electask.com`,
        title: `Election Task Calendar`,
        description: `Electask helps you manage your election tasks.  With the help of Electask, you'll have smoother elections and better communication.  Stay on top of election tasks.`
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pdf`,
                path: `${__dirname}/src/pdf`
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-hubspot',
            options: {
                trackingCode: '4294167',
                // Setting this parameter is optional
                respectDNT: true
            }
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require('sass')
            }
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            }
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: 'GTM-KL8BJMB',

                // Include GTM in development.
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false

                // // Specify optional GTM environment details.
                // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING',
                // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME',
                // dataLayerName: 'GTM-KL8BJMB'
            }
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-crisp-chat`,
            options: {
                websiteId: '2d6c25c8-b034-43a9-a3cd-439b1f56addd',
                enableDuringDevelop: false,
                defer: true
            }
        }
    ]
};

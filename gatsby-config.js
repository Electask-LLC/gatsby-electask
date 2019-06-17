/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        siteUrl: `https://electask.com`,
        title: 'Election Task Calendar',
        description:
            "Electask helps you manage your election tasks.  With the help of Electask, you'll have smoother elections and better communication.  Stay on top of election tasks."
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-106586103-2',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ['/preview/**', '/do-not-track/me/too/'],
                // Enables Google Optimize using your container Id
                // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
                // // Enables Google Optimize Experiment ID
                // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
                // // Set Variation ID. 0 for original 1,2,3....
                // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
                // // Any additional create only fields (optional)
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'electask.com'
            }
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/images`
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
        }
    ]
};

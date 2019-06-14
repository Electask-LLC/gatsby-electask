/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.example.com`
    },
    plugins: [
        // {
        //     resolve: `gatsby-plugin-google-analytics`,
        //     options: {
        //         trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        //         // Defines where to place the tracking script - `true` in the head and `false` in the body
        //         head: false,
        //         // Setting this parameter is optional
        //         anonymize: true,
        //         // Setting this parameter is also optional
        //         respectDNT: true,
        //         // Avoids sending pageview hits from custom paths
        //         exclude: ['/preview/**', '/do-not-track/me/too/'],
        //         // Enables Google Optimize using your container Id
        //         optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        //         // Enables Google Optimize Experiment ID
        //         experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        //         // Set Variation ID. 0 for original 1,2,3....
        //         variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        //         // Any additional create only fields (optional)
        //         sampleRate: 5,
        //         siteSpeedSampleRate: 10,
        //         cookieDomain: 'example.com'
        //     }
        // },
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
                trackingCode: '5754739',
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

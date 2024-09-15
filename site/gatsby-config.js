module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {}
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `content/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
  siteMetadata: {
    // Your site URL without trailing slash
    siteUrl: "https://www.buildinginthephilippines.com",
    googleSiteVerification: 'r826BNXppeOrAORh8p5M4GAhQNqyljXbPoe9OVYKuT8',
    //General Site Metadata
    title: 'We talk about construction',
    name: 'Building in the Philippines',
    description: 'We talk about construction',
    address: 'Dubai, UAE',
    email: 'daniel@danielsobrado.com',
    phone: '',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/danielsobrado'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/JDanielSob'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/building-in-the-philippines/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'About',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Publish',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Me',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}

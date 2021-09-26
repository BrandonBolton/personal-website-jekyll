module.exports = {
  siteMetadata: {
    description: "Personal page of Brandon Bolton",
    locale: "en",
    title: "Brandon Bolton",
    formspreeEndpoint: "https://formspree.io/f/xwkwgkko",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-green",
      },
    },
  ],
}
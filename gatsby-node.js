const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      artists: cbc {
        listArtists(limit: 1000) {
          items {
            slug
            id
          }
        }
      }
      artwork: cbc {
        listArtworks(limit: 10000) {
          items {
            slug
            id
            catalogueNumber
          }
        }
      }
    }
  `)

  data.artists.listArtists.items.forEach(({ slug, id }) => {
    actions.createPage({
      path: `/artists/${slug}`,
      component: path.resolve(`./src/templates/Artist.js`),
      context: {
        id,
      },
    })
  })

  data.artwork.listArtworks.items.forEach(({ slug, id, catalogueNumber }) => {
    const regexCatalogueNumber = `/cbs${catalogueNumber}/i`
    actions.createPage({
      path: `/artworks/${slug}`,
      component: path.resolve(`./src/templates/Artwork.js`),
      context: {
        id,
        regexCatalogueNumber,
      },
    })
  })
}

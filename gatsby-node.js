const path = require("path")
const sharp = require("sharp")
sharp.simd(false)
sharp.cache(false)

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
            images {
              items {
                file {
                  key
                }
              }
            }
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

  data.artwork.listArtworks.items.forEach(({ slug, id, images }) => {
    const imageBaseArray = getImageBases(images.items)
    const imagesString = makeImagesString(imageBaseArray)
    const regex = `/${imagesString}/i`
    actions.createPage({
      path: `/artworks/${slug}`,
      component: path.resolve(`./src/templates/Artwork.js`),
      context: {
        id,
        regex,
      },
    })
  })
}

function getImageBases(imageArray) {
  // Returns all the images base names from each S3 file key
  return imageArray.map(
    image => image.file.key.split("public/uploads/artwork/")[1]
  )
}

function makeImagesString(imageBaseArray) {
  // Need to pass something that's not an empty string to regex..
  if (imageBaseArray.length === 0) return "no-images-found"
  // Returns piped string for regex
  return imageBaseArray.reduce((acc, val) => {
    if (imageBaseArray.length > 1) {
      return acc + `|${val}`
    }
    return acc
  })
}

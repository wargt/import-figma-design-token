import { Api, fileId, findFrameItemsOnPage, FatalError } from "../utils"
const fs = require('fs')
const request = require('request')

const downloadSvg = function(uri, filename) {
  return new Promise(resolve => {
    request.head(uri, function(err, res, body) {
      request(uri).pipe(fs.createWriteStream(filename)).on('close', resolve)
    })
  })
}

const downloadAllSvgLinks = async function (svgLinks, step = 0) {
  const imageLink = svgLinks[step]

  if (!imageLink) {
    return
  }

  await downloadSvg(imageLink.url, `./dist/assets/${imageLink.name}.svg`)

  await downloadAllSvgLinks(svgLinks, step + 1)
}

export default async function svgIcons (file) {
  console.log('import svgIcons...')

  const icons = findFrameItemsOnPage(file, 'Icons', 'icons-frame')

  const svgIcons = icons.filter(item => item.type === 'COMPONENT')

  const iconKeys = svgIcons.map(item => item.id)

  if (!iconKeys.length) {
    FatalError('Not found svg icon keys')
  }

  // получим ссылки на скачивание
  const svgFiles = await Api.getImage(fileId, {
    ids: iconKeys,
    scale: 1,
    format: 'svg',
    svg_include_id: true,
    // svg_simplify_stroke: false
  })

  const imageLinks = Object.keys(svgFiles.images).reduce((result, imageKey) => {
    const icon = svgIcons.find(item => item.id === imageKey)

    if (!icon) {
      FatalError(`No found svg icon ${imageKey}`)
    }

    result.push({
      imageKey,
      name: icon.name,
      url: svgFiles.images[imageKey]
    })

    return result
  }, [])

  await downloadAllSvgLinks(imageLinks, 0)

  console.log('download all svg files finished')
}

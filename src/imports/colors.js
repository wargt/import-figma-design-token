import { Api, fileId, rgba, rgba2hex, FatalError } from '../utils'
import { get } from 'lodash'

export default async function colors (file) {
  console.log('import colors...')
  const res = {}
  const styles = get(file, 'styles', {})
  const colorsKeys = Object.keys(styles).filter(key => get(styles, `${key}.styleType`) === 'FILL')

  if (!colorsKeys.length) {
    FatalError('Not found colorsKeys')
  }

  const { nodes } = await Api.getFileNodes(fileId, colorsKeys)

  Object.keys(nodes).forEach(key => {
    const { name, fills } = nodes[key].document

    res[name] = rgba2hex(rgba(get(fills, '0.color')))
  })

  const jsonData = JSON.stringify(res, null, 2)
  return `export const colors = ${jsonData};`
}

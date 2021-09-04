import { Api, FatalError, fileId } from '../utils'
import { get } from 'lodash'

export default async function colors (file) {
  console.log('import fonts...')
  const res = {}
  const styles = get(file, 'styles', {})
  const textKeys = Object.keys(styles).filter(key => get(styles, `${key}.styleType`) === 'TEXT')

  if (!textKeys.length) {
    FatalError('Not found textKeys')
  }

  const { nodes } = await Api.getFileNodes(fileId, textKeys)

  Object.keys(nodes).forEach(key => {
    const { name, style } = nodes[key].document;

    res[name] = {
      fontFamily: style.fontFamily,
      fontWeight: style.fontWeight,
      fontSize: style.fontSize,
      lineHeight: `${style.lineHeightPx}px`,
      letterSpacing: style.letterSpacing
    }
  })

  const jsonData = JSON.stringify(res, null, 2)
  return `export const fonts = ${jsonData};`
}

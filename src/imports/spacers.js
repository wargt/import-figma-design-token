import { get, forEach } from 'lodash'
import { FatalError, findFrameItemsOnPage } from '../utils'

export default async function spacers (file) {
  console.log('import spacers...')
  const res = {}

  const spacers = findFrameItemsOnPage(file, 'Spacers', 'Spacers-frame')

  // нужный спейс с вариантами
  const spacersComponent = spacers.find(item => item.name === 'Spacers' && item.type === 'COMPONENT_SET')

  if (!spacersComponent) {
    FatalError('Not found Spacers Component')
  }

  forEach(spacersComponent.children, space => {
    const name = String(space.name).replace('Property 1=', '')
    const width = get(space, 'absoluteBoundingBox.width')
    const height = get(space, 'absoluteBoundingBox.height')

    res[name] = { width, height }
  })

  const jsonData = JSON.stringify(res, null, 2)
  return `export const spacers = ${jsonData};`
}

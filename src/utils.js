import * as Figma from "figma-api";
import { get } from "lodash";

export const figmaToken = '230885-033779a8-2416-4c12-9822-72ddb6f3d783'
export const fileId = '6VWZTr1xThW33fjGjICKwR'

export const Api = new Figma.Api({
  personalAccessToken: figmaToken,
})

export const FatalError = (error) => {
  console.log('\x1b[31m', `FatalError! ${error}`, '\x1b[0m', '\n')
  process.exit(1)
}

// поиск элементов на странице в конкретном фрейме
export const findFrameItemsOnPage = (file, pageName, frameName) => {
  const pages = get(file, 'document.children', [])
  const spacersPage = pages.find(item => item.name === pageName)

  // страница
  if (!spacersPage) {
    FatalError(`Not found Page: ${pageName}`)
  }

  // фрейм
  const spacersFrame = get(spacersPage, 'children', []).find(item => item.name === frameName)

  if (!spacersFrame) {
    FatalError(`Not found Frame: ${frameName}`)
  }

  return spacersFrame.children
}

export const rgba = (background) => {
    return `rgba(${Math.round(background.r * 255)}, ${Math.round(
        background.g * 255
    )}, ${Math.round(background.b * 255)}, ${background.a})`;
}

export const rgba2hex = (rgba) => {
    // eslint-disable-next-line no-param-reassign
    rgba = rgba.match(
        /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    return rgba && rgba.length === 4
        ? `#${`0${parseInt(rgba[1], 10).toString(16)}`.slice(-2)}${`0${parseInt(
              rgba[2],
              10
          ).toString(16)}`.slice(-2)}${`0${parseInt(rgba[3], 10).toString(
              16
          )}`.slice(-2)}`
        : '';
};

import { Api, fileId } from './utils'
import importColors from './imports/colors'
import importFonts from './imports/fonts'
import importSpacers from './imports/spacers'
import importSvgIcons from './imports/svg-icons'
import fs from 'fs'
// import shell from 'shelljs'

const startImport = async () => {
  console.log('\x1b[32m', 'import from figma', '\x1b[0m')
  const file = await Api.getFile(fileId)

  const colors = await importColors(file)
  const fonts = await importFonts(file)
  const spacers = await importSpacers(file)

  await importSvgIcons(file)

  fs.writeFile(
    './dist/tokens.ts',
`${colors}
${fonts}
${spacers}
        `,
    'utf8',
    (err) => {
      if (err) {
        return console.log(err);
      }
      // shell.exec(
      //   `yarn prettier --write ./packages/ornament/src/tokens.ts`
      // );

      return console.log('The file was saved!');
    }
  );

}

startImport()



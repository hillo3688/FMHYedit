// @ts-check
import tasky from '@taskylizard/eslint-config'

export default tasky({
  vue: true,
  typescript: true,
  browser: true,
  unocss: true,
  files: ['**/.vitepress/**']
})

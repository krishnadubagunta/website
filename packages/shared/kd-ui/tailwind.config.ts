import type { Config } from 'tailwindcss'
import sharedConfig from 'tailwindconfig'

const config: Config = {
  ...sharedConfig,
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
}
export default config

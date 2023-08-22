import type { Config } from 'tailwindcss'
import sharedConfig from 'tailwindconfig'

const config: Config = {
  ...sharedConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "../../packages/shared/kd-ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
}
export default config

import type { Config } from 'tailwindcss'
import sharedConfig from 'tailwindconfig'

const config: Config = {
  ...sharedConfig as Partial<Config>,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "../../packages/shared/kd-ui/ui/**/*.{js,ts,jsx,tsx}",
  ],
}

export default config

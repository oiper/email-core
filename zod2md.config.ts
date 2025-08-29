import type { Config } from 'zod2md'

const config: Config = {
  output: 'SCHEMA.md',
  entry: 'src/docs/schema.ts',
  title: '📘 Email Components API Reference',
}

export default config

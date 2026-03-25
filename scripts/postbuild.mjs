import { access, rename } from 'node:fs/promises'

const builtHtml = new URL('../docs/app.html', import.meta.url)
const indexHtml = new URL('../docs/index.html', import.meta.url)

await access(builtHtml)
await rename(builtHtml, indexHtml)

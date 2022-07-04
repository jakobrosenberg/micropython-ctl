import { createLogger } from 'consolite'

const timestamp = (d: Date = new Date()) =>
  [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map((d) => d.toString().padStart(2, '0'))
    .join(':') + `.${d.getMilliseconds().toString().padEnd(3, '0')}`

// export const IS_ELECTRON = typeof (navigator) !== 'undefined' && navigator.userAgent.indexOf('Electron/') > -1

// Show debug output when DEBUG variable is set (env or window)

// const logger = createLogger()
const logger = createLogger(()=> timestamp(), '[micropython-ctl]')
logger.register('silly', console.log)
logger.level = 5

logger.filter = (_prefixes, method) =>
  (method !== 'debug' || process.env.debug) &&
  (method !== 'silly' || process.env.debug === 'silly')


export { logger }

export const delayMillis = (delayMs: number) =>
  new Promise((resolve) => setTimeout(resolve, delayMs))

/**
 * Return trimmed, dedented text.
 * Just like the Python equivalent: https://docs.python.org/3/library/textwrap.html#textwrap.dedent
 */
export const dedent = (text: string): string => {
  // Remove newline from start and end
  const lines = text.replace(/^\n|\s+$/g, '').split('\n')
  // console.log(lines)
  if (lines.length === 0) return text.trim()

  // find smallest common indentation
  let mindent: number | null = null
  lines.forEach((l) => {
    const m = l.match(/^(\s+)\S+/)
    // console.log(m)
    if (m) {
      const indent = m[1].length
      mindent = mindent ? Math.min(mindent, indent) : indent
    } else {
      mindent = 0
    }
  })

  // console.log(mindent)

  if (!mindent) return text.trim()
  const result = lines.map((l) => l.slice(mindent!)).join('\n')
  return result.trim()
}

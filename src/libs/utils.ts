// To handle any common path resolution issues on Windows/Linux environment
export const resolvePath = (context: string) => {
  return `${context.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}`
}

function getImageAlt(src: string): string {
   const idx = src.lastIndexOf('/') + 1
   const str = src.substring(idx, src.length)
   const ext = str.indexOf('.')
   return str.substring(0, ext)
}

export default getImageAlt

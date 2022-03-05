export default {
   zoomIn: (scale = 0.5) => ({
      from: {
         opacity: 0,
         transform: `scale3d(${scale}, ${scale}, ${scale})`
      },
      to: {
         opacity: 1,
         transform: 'scale3d(1, 1, 1)'
      }
   })
}

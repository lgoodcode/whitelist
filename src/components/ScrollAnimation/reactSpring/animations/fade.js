export default {
   fadeIn: () => ({
      from: {
         opacity: 0
      },
      to: {
         opacity: 1
      }
   }),
   fadeInUp: (distance = 100) => ({
      from: {
         opacity: 0,
         transform: `translate3d(0, ${distance}px, 0)`
      },
      to: {
         opacity: 1,
         transform: `translate3d(0, 0, 0)`
      }
   }),
   fadeInDown: (distance = 100) => ({
      from: {
         opacity: 0,
         transform: `translate3d(0, -${distance}px, 0)`
      },
      to: {
         opacity: 1,
         transform: `translate3d(0, 0, 0)`
      }
   }),
   fadeInLeft: (distance = 100) => ({
      from: {
         opacity: 0,
         transform: `translate3d(${distance}px, 0, 0)`
      },
      to: {
         opacity: 1,
         transform: `translate3d(0, 0, 0)`
      }
   }),
   fadeInLeftBig: (distance = 1000) => ({
      from: {
         opacity: 0,
         transform: `translate3d(${distance}px, 0, 0)`
      },
      to: {
         opacity: 1,
         transform: `translate3d(0, 0, 0)`
      }
   }),
   fadeInRight: (distance = 100) => ({
      from: {
         opacity: 0,
         transform: `translate3d(-${distance}px, 0, 0)`
      },
      to: {
         opacity: 1,
         transform: `translate3d(0, 0, 0)`
      }
   }),
   fadeInUpLeft: (distance = 100) => ({
      from: {
         opacity: 0,
         transform: `translate3d(${distance}px, ${distance}px, 0)`
      },
      to: {
         opacity: 1,
         transform: `translate3d(0, 0, 0)`
      }
   }),
   fadeInUpRight: (distance = 100) => ({
      from: {
         opacity: 0,
         transform: `translate3d(-${distance}px, ${distance}px, 0)`
      },
      to: {
         opacity: 1,
         transform: `translate3d(0, 0, 0)`
      }
   }),
   fadeInDownLeft: (distance = 100) => ({
      from: {
         opacity: 0,
         transform: `translate3d(${distance}px, -${distance}px, 0)`
      },
      to: {
         opacity: 1,
         transform: `translate3d(0, 0, 0)`
      }
   }),
   fadeInDownRight: (distance = 100) => ({
      from: {
         opacity: 0,
         transform: `translate3d(-${distance}px, -${distance}px, 0)`
      },
      to: {
         opacity: 1,
         transform: `translate3d(0, 0, 0)`
      }
   })
}

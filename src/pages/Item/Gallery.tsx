import { Box } from '@mui/material'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const galleryOptions = {
   buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false
   }
}

function Gallery({ images }: { images: string[] }) {
   return (
      <SimpleReactLightbox>
         <Box display="flex" justifyContent="center">
            <Box>
               <Box maxWidth={480}>
                  <a href={images[0]}>
                     <img src={images[0]} width="100%" />
                  </a>
               </Box>

               {images && (
                  <SRLWrapper options={galleryOptions}>
                     <Box
                        mt={8}
                        py={1}
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="rgb(255 255 255 / 10%)"
                     >
                        {images.map((image) => (
                           <Box key={image} m={1} overflow="hidden" height={80}>
                              <a href={image}>
                                 <Box
                                    component="img"
                                    src={image}
                                    height={80}
                                    width="auto"
                                    sx={{
                                       transition: 'all 0.3s ease-in-out',
                                       ':hover': {
                                          transform: 'scale(1.15)'
                                       }
                                    }}
                                 />
                              </a>
                           </Box>
                        ))}
                     </Box>
                  </SRLWrapper>
               )}
            </Box>
         </Box>
      </SimpleReactLightbox>
   )
}

export default Gallery

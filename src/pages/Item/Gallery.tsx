import { Box, Grid } from '@mui/material'
import { SRLWrapper } from 'simple-react-lightbox'

const galleryOptions = {
   buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false
   }
}

function Gallery({ images }: { images: string[] }) {
   return (
      <Box>
         <Box display="flex" justifyContent="center">
            <SRLWrapper options={galleryOptions}>
               <Box maxWidth={480}>
                  <a href={images[0]}>
                     <img src={images[0]} width="100%" />
                  </a>
               </Box>
               <Box mt={8}>
                  <Grid
                     container
                     spacing={1}
                     justifyContent="center"
                     bgcolor="rgb(255 255 255 / 10%)"
                  >
                     {images &&
                        images.map((image, i) => (
                           <Grid item key={i}>
                              <Box sx={{ height: 80, overflow: 'hidden' }}>
                                 <a href={image}>
                                    <Box
                                       component="img"
                                       src={image}
                                       height={80}
                                       sx={{
                                          transition: 'all 0.3s ease-in-out',
                                          ':hover': {
                                             transform: 'scale(1.15)'
                                          }
                                       }}
                                    />
                                 </a>
                              </Box>
                           </Grid>
                        ))}
                  </Grid>
               </Box>
            </SRLWrapper>
         </Box>
      </Box>
   )
}

export default Gallery

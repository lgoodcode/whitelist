import { Box } from '@mui/material'
import { useRef } from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Image from 'components/Image'
import { getImageAlt } from 'helpers'

const galleryOptions = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showThumbnailsButton: false,
  },
  caption: {
    showCaption: false,
  },
}

function Gallery({ images }: { images: string[] }) {
  const mainImageRef = useRef<HTMLElement>()
  const handleMainImageClick = () => {
    if (mainImageRef.current) {
      mainImageRef.current.click()
    }
  }

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Box display="flex" mx="auto" maxWidth={480}>
        <Image
          skeleton="circular"
          src={images[0]}
          alt={getImageAlt(images[0])}
          sx={{ cursor: 'pointer' }}
          onClick={handleMainImageClick}
        />
      </Box>

      {images && (
        <SimpleReactLightbox>
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
              {images.map((image, i) => (
                <Box
                  key={image}
                  m={1}
                  height={80}
                  border={2}
                  borderColor="rgb(255 255 255 / 40%)"
                  boxShadow={15}
                  sx={{
                    ':hover': {
                      boxShadow: '0px 0px 11px 3px rgb(255 255 255 / 20%)',
                    },
                  }}
                >
                  <Box
                    ref={i === 0 ? mainImageRef : undefined}
                    component="img"
                    src={image}
                    height={76}
                    width="auto"
                    alt={getImageAlt(image)}
                    sx={{ cursor: 'pointer' }}
                  />
                </Box>
              ))}
            </Box>
          </SRLWrapper>
        </SimpleReactLightbox>
      )}
    </Box>
  )
}

export default Gallery

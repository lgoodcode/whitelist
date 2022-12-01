import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'
import { Box, Button, Fab, Skeleton, TextField, Typography } from '@mui/material'
interface QuantityProps {
  loading: boolean
  inStock: boolean
  quantity: number
  total: number
  handleIncrement: () => void
  handleDecrement: () => void
  handleAddItem: () => void
}

function Quantity({
  loading,
  inStock,
  quantity,
  total,
  handleIncrement,
  handleDecrement,
  handleAddItem,
}: QuantityProps): JSX.Element {
  return (
    <Box>
      {loading ? (
        <>
          <Skeleton height={30} width="40%" />
          <Skeleton height={80} width="50%" />
          <Skeleton height={40} width="100%" />
        </>
      ) : (
        <>
          <Box>
            <Typography variant="body1">Select desired quantity</Typography>
          </Box>

          <Box mt={1} display="flex" alignItems="center">
            <Fab
              aria-label="increment quantity"
              disabled={!inStock}
              size="small"
              onClick={handleIncrement}
              sx={{ border: '1px solid rgb(156 163 175 / 0.4)' }}
            >
              <AddIcon />
            </Fab>

            <TextField
              disabled={!inStock}
              value={quantity}
              inputProps={{
                readOnly: true,
                inputMode: 'numeric',
                min: 0,
                max: total,
                style: { textAlign: 'center' },
              }}
              sx={{
                mx: 1,
                width: '4rem',
                border: '1px solid rgb(156 163 175 / 0.4)',
                borderRadius: 1,
              }}
            />

            <Fab
              aria-label="decrement quantity"
              disabled={!inStock}
              size="small"
              onClick={handleDecrement}
              sx={{ border: '1px solid rgb(156 163 175 / 0.4)' }}
            >
              <RemoveIcon />
            </Fab>
          </Box>

          <Box mt={2}>
            {inStock ? (
              <Button
                fullWidth
                color="secondary"
                variant="contained"
                onClick={handleAddItem}
                disabled={quantity < 1}
              >
                Add to Cart
              </Button>
            ) : (
              <Button fullWidth variant="outlined" color="primary" disabled>
                Sold Out
              </Button>
            )}
          </Box>
        </>
      )}
    </Box>
  )
}

export default Quantity

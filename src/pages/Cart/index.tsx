import { Home } from '@mui/icons-material'
import {
   Box,
   Button,
   Divider,
   Drawer,
   List,
   ListItem,
   ListItemIcon,
   ListItemText
} from '@mui/material'

function Cart() {
   return (
      <Drawer open={true} anchor="right" onClose={() => null}>
         <Box role="presentation">
            <List>
               <ListItem button>
                  <ListItemIcon>
                     <Home />
                  </ListItemIcon>
                  <ListItemText>Test</ListItemText>
               </ListItem>
            </List>
            <Box mt="auto" display="flex" flexDirection="column">
               <Divider />
               <Button variant="contained" color="inherit">
                  Checkout now
               </Button>
               <Button variant="outlined" color="inherit">
                  View Cart
               </Button>
            </Box>
         </Box>
      </Drawer>
   )
}

export default Cart

import { Provider } from 'react-redux'
import store from 'app/store'
import type { ReactNode } from 'react'

export default ({ children }: { children: ReactNode }) => (
   <Provider store={store}>{children}</Provider>
)

import { BrowserRouter } from 'react-router-dom'
import type { ReactNode } from 'react'

export default ({ children }: { children: ReactNode }) => (
   <BrowserRouter>{children}</BrowserRouter>
)

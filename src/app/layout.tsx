import '../styles/globals.scss'
import { ReactNode } from 'react'
import { MainLayout } from '@/layout/MainLayout/MainLayout'

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <head ><title>V-shop</title></head>
    <body>
      <MainLayout>{children}</MainLayout>
    </body>
  </html>
)

export default RootLayout

import 'styles/globals.scss'
import { FC } from 'react'
import { MainLayout } from './layout/MainLayout'
import { MainLayoutProps } from "./layout/MainLayout.props";
import { Header } from "./layout/components/Header/Header";
import { Footer } from "./layout/components/Footer/Footer";
import styles from "./layout/MainLayout.module.scss";

const RootLayout: FC<MainLayoutProps> = ({ children })=> (
  <html lang='en'>
    <head><title>V-shop</title></head>
    <body>
      <div className={styles.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </body>
  </html>
)

export default RootLayout

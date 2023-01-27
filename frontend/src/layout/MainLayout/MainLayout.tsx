import { FC } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MainLayoutProps } from './MainLayout.props'
import styles from './MainLayout.module.scss'

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

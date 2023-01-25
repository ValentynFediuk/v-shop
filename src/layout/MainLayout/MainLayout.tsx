import { FC } from 'react'
import { Footer } from '@/layout/MainLayout/components/Footer/Footer'
import { Header } from '@/layout/MainLayout/components/Header/Header'
import { MainLayoutProps } from '@/layout/MainLayout/MainLayout.props'
import styles from './MainLayout.module.scss'

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

import { FC } from 'react'
import Link from 'next/link'
import LogoIcon from 'frontend/public/logo.svg'
import styles from './Logo.module.scss'

export const Logo: FC = () => (
  <Link className={styles.logo} href='/'>
    <LogoIcon />
  </Link>
)

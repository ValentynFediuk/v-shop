import { FC } from 'react'
import { Logo } from '@/components/ui/Logo/Logo'
import styles from './Header.module.scss'

export const Header: FC = () => (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.inner}>
					<Logo />
				</div>
			</div>
		</header>
	)
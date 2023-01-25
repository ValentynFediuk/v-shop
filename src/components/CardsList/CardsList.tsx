import React from 'react'
import { CardItemsData } from '@/components/CardsList/cards-list.data'
import { CardItem } from '@/components'
import styles from './CardsList.module.scss'

export const CardsList = () => (
		<div className={styles.list}>
			<div className={styles.grid}>
				{CardItemsData.map(item => (
					<CardItem
						img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
			</div>
		</div>
)
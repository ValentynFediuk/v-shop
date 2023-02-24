import React, { FC } from 'react'
import { CardsListProps, IItem } from "components/CardsList/CardsListProps";
import mockImg from 'assets/MockComputerImg.png'
import { CardItem } from '../index'
import styles from './CardsList.module.scss'

export const CardsList:FC<CardsListProps> = ({items}) => (
		<div className={styles.list}>
			<div className={styles.grid}>
				{items.map((item: IItem) => (
					<CardItem
						img={mockImg}
						_id={item._id}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
				{items.map((item: IItem) => (
					<CardItem
						img={mockImg}
						_id={item._id}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
			</div>
		</div>
	)

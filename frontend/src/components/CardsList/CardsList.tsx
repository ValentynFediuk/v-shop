import React from 'react'
import { CardItem } from '../index'
import styles from './CardsList.module.scss'

export const CardsList = ({items}) => {
	return (
		<div className={styles.list}>
			<div className={styles.grid}>
				{items.map(item => (
					<CardItem
						// img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
				{items.map(item => (
					<CardItem
						// img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
				{items.map(item => (
					<CardItem
						// img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
				{items.map(item => (
					<CardItem
						// img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
				{items.map(item => (
					<CardItem
						// img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
				{items.map(item => (
					<CardItem
						// img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
				{items.map(item => (
					<CardItem
						// img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
				{items.map(item => (
					<CardItem
						// img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
				{items.map(item => (
					<CardItem
						// img={item.img}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
			</div>
		</div>
	)
}

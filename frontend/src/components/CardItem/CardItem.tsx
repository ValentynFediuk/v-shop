import { FC } from 'react'
import Image from 'next/image'
import mockImg from 'frontend/public/MockComputerImg.png'
import Link from 'next/link'
import { CardItemProps } from './CardItem.props'
import styles from './CardItem.module.scss'

export const CardItem: FC<CardItemProps> = ({ title, description, price }) => (
  <Link prefetch={false} href={`/${title.replaceAll(' ', '-')}`} className={styles.card}>
    <Image src={mockImg} alt='Image' />
    <h2>{title}</h2>
    <p>{description}</p>
    <h3>{price}</h3>
    <button type='button'>Buy</button>
  </Link>
)

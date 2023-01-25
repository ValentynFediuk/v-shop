import { FC } from 'react'
import Image from 'next/image'
import { CardItemProps } from '@/components/CardItem/CardItem.props'
import Link from 'next/link'
import styles from './CardItem.module.scss'

export const CardItem: FC<CardItemProps> = ({ img, title, description, price }) => (
  <Link href='/' className={styles.card}>
    <Image src={img} alt='Image' />
    <h2>{title}</h2>
    <p>{description}</p>
    <h3>{price}</h3>
    <button type='button'>Buy</button>
  </Link>
)

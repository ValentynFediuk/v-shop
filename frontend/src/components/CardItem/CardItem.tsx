import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IItem } from "components/CardsList/CardsListProps";
import mockImg from 'assets/MockComputerImg.png'
import styles from './CardItem.module.scss'

export const CardItem: FC<IItem> = ({ _id, title, description, price }) => (
  <Link href={`product/${_id}`} className={styles.card}>
    <Image src={mockImg} alt='Image' />
    <h2>{title}</h2>
    <p>{description}</p>
    <h3>{price}</h3>
    <button type='button'>Buy</button>
  </Link>
)

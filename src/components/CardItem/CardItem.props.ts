import { StaticImageData } from 'next/image'

export interface CardItemProps {
	img: StaticImageData,
	title: string,
	description: string,
	price: string,
}
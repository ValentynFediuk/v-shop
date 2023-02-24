import { StaticImageData } from 'next/image'

export interface CardItemProps {
	img: StaticImageData,
	id: string,
	title: string,
	description: string,
	price: string,
}
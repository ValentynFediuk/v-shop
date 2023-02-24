import { StaticImageData } from "next/image";

export interface CardsListProps {
	items: [
		item: IItem
	]
}

export interface IItem {
	_id: string
	img: StaticImageData
	title: string
	description: string
	price: number
}
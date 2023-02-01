import axios from "axios";
import { CardsList } from "../components";

async function getData() {
	try {
		const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
		return data.products
	} catch (error) {
		console.error(error);
	}
}

export default async function Home() {
	const items = await getData()

	return (
		<CardsList
			items={items}
		/>

	)
}

import axios from "axios";
import { CardsList } from "components";
import { Suspense } from "react";
import Loading from "./loading";

const getData = async () => {
	let response

	try {
		const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
		response = data.products
	} catch (error) {
		throw new Error(`${error}`)
	}

	return response
}

const Home = async () => {
	const items = await getData()

	return (
			<CardsList
				items={items}
			/>
	)
}

export default Home
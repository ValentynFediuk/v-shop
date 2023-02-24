import axios from "axios";
import { CardItem } from 'components'
import mockComputerImg from 'assets/MockComputerImg.png'

export async function generateStaticParams() {
	const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
	const res = await data

	return res.data.products.map((product: { _id: string; }) => ({
		product: product._id
	}))
}

export interface IProduct {
		product: string
}

const Product = async ({
	params
}: {
	params: IProduct
}) => {
	const { product } = params
	const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${product}`)
	const res = await data

	return (
		<CardItem
			_id={res.data._id}
			img={mockComputerImg}
			title={res.data.title}
			description={res.data.description}
			price={res.data.price}
		/>
	)
}

export default Product
import axios from "axios";
import React from "react";
import { CardItem } from '../../components'

export async function generateStaticParams() {
	const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
	const res = await data
	console.log('res ffdd', res.data.products)
	return res.data.products.map((product) => ({
		product: product.title.replace(' ', '-'),
	}))
}

export default async function Product({ params }) {
	console.log('paramsssssssssssssssssssssssssss', params)
	const { product } = params
	const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
	const res = await data

	return (
		<CardItem
			// img={item.img}
			title={res.data.products[0].title}
			description={res.data.products[0].description}
			price={res.data.products[0].price}
		/>
	)
}
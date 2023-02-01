"use client";

import axios from "axios";
import React from "react";
import { CardItem } from '../../components'


export async function generateStaticParams() {
	const data = await axios.get(`http://localhost:3002/products`, {withCredentials: true})
	const res = await data
	return res.data.products.map((product) => ({
		product: product.title.replace(' ', '-'),
	}))
}

export default async function Product({ params }) {
	const { product } = params
	console.log(params)
	const data = await axios.get(`http://localhost:3002/product/${product}`)
	const res = await data

	return (
		<CardItem
			// img={item.img}
			title={res.data.product.title}
			description={res.data.description}
			price={res.data.price}
		/>
	)
}
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shop-context'
import Title from './title'
import ProductItem from './product-item'

const BestSeller = () => {
	const { products } = useContext(ShopContext)
	const [bestSeller, setBestSeller] = useState([])

	useEffect(() => {
		const bestProduct = products.filter(item => item.bestseller)
		setBestSeller(bestProduct.slice(0, 5))
	}, [])

	return (
		<div className='my-10'>
			<div className='text-center text-3xl py-8'>
				<Title text1={'BEST'} text2={'SELLERS'} />
				<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem quidem aut dolorem natus laudantium accusamus obcaecati
				</p>
			</div>

			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
				{bestSeller.map((item, idx) => (
					<ProductItem key={idx} {...item} />
				))}
			</div>
		</div>
	)
}

export default BestSeller

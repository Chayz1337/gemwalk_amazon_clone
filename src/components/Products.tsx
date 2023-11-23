import { ProductProps } from '@/pages/type'
import React from 'react'
import Image from 'next/image'
import { HiShoppingCart } from 'react-icons/hi'
import { HiHeart } from 'react-icons/hi'
import FormattedPrice from './FormattedPrice'

const Products = ( {productData}: any ) => {

  return (
    <div className="w-full px-32 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-4 gap-6 mx-0.5">
     {productData.map(({_id,title,brand,category,description,image,isNew,oldPrice,price}:ProductProps) => (
      <div key={_id} className="bg-white text-black p-4 border border-gray-300 rounded-lg group mx-5 groupe overflow-hidden">
        <div className="w-full h-[250px] relative">
        <Image className ="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300 px-8 items-center" width={300} height ={300} src ={image} alt="productImage" />
        <hr />
        <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0  transition-transform duration-300">
        <span className='w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'>
          <HiShoppingCart />
        </span>
        <span className='w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_red cursor-pointer duration-300'>
          <HiHeart />
        </span>
        </div>
        {
          isNew && <p className='absolute top-0 right-0 text-amazon_blue font-medium text-sm subpixel-antialiased tracking-wide animate-bounce'>!Скидка <FormattedPrice amount={oldPrice - price} /></p>
        }
        </div>
        <div className='px-4 py-3 flex flex-col gap-1'>
          <p className='text-ml text-gray-500 tracking-wide'>{category}</p>
          <p className='text-base font-medium text-black'>{title}</p>
          <p className='flex items-center gap-2'>
            <span className='text-sm line-through'>
          <span><FormattedPrice amount={oldPrice} /> </span>
          </span>
          <span className='text-amazon_blue font-semibold'>
            <FormattedPrice amount={price} /> 
          </span>
          </p>
          <p className='text-xs text-gray-600 text-justify'>{description.substring(0,120)}</p>
          <button className='text-ml bg-black text-white w-full h-10 items-center rounded-md bg-transparent hover:bg-amazon_yellow hover:text-black cursor-pointer duration-300 my-2'> добавить в корзину </button>
        </div>
      </div>
))}
    </div>
  )
}
export default Products
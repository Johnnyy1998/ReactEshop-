import React, { useContext } from 'react'
import { products } from '../data'
import { MessageContext } from './ContextProvider';


const Home = () => {
    const {handleBasket} = useContext(MessageContext);

    return (
      <div className='bg-red-100 py-8 px-4'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>
          Black <span className='text-red-600'>Friday</span>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map((product) => {
            const { id, img, title, price, description, quantity } = product;
            return (
              <article key={id} className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <img src={img} alt={title} className='w-full h-48 object-cover rounded-md mb-4' />
                <h3 className='text-xl font-semibold text-gray-700 mb-2'>{title}</h3>
                <p className='text-lg text-gray-500 mb-4'>{description}</p>
                <p className='text-lg font-bold text-gray-800'>{price}</p>
                <button 
                    onClick={() => handleBasket({title, price, id, img, quantity })}
                    className='mt-4 w-full py-2 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300'>
                  Add to Cart
                </button>
              </article>
            )
          })}
        </div>
      </div>
    )
  }

export default Home

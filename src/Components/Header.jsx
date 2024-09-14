import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { MessageContext } from './ContextProvider';
const Header = () => {
  const {basket} = useContext(MessageContext);

  const getNumberOfItems =()=>{
    return basket.reduce((total, item) => 
        total + item.quantity,0)
  }

  console.log(basket);  
  return (
    <div className='bg-red-200'>
        <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-6 sm:justify-between'>
            <h2 className='text-3xl font-bold'>
                Web<span className='text-red-500'>Center</span>
            </h2>
            <div className='flex gap-x-6'>
                <Link
                    className='capitalize text-lg tracking-wide font-semibold hover:text-red-600 duration-300'
                    to='/'
                >
                    Home
                </Link>
                <Link
                    className='capitalize text-lg tracking-wide font-semibold hover:text-red-600 duration-300'
                    to='/products'
                >
                    Products
                </Link>
                <Link
                    to='/about'
                    className='capitalize text-lg tracking-wide font-semibold hover:text-red-600 duration-300'
                >
                    About Us
                </Link>
            </div>

            <div className='flex items-center'>
                <Link to='/basket' className='relative flex items-center'>
                    <FaShoppingCart className='h-8 w-8 text-gray-700 hover:text-gray-500 hover:bg-gradient-to-r' />
                    {getNumberOfItems() > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1'>
                            {getNumberOfItems()}
                        </span>
                    )}
                </Link>
            </div>


            
      </div>
    </div>
  )
}

export default Header

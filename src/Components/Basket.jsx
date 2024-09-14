
import React, { useContext } from 'react';
import { MessageContext } from './ContextProvider';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
  const { basket, removeBasket, clearBasket } = useContext(MessageContext);
  const navigate = useNavigate();
  // Funkce pro výpočet celkové sumy
  const calculateTotal = () => {
    return basket.reduce((total, item) => 
      total + parseFloat(item.price.replace('$', '')) * item.quantity, 0
    ).toFixed(2);
  };

  const handleClearBasket=()=>{
    clearBasket();
    navigate('/');
  }
  return (
    <div className='bg-gray-100 min-h-screen py-8 px-4 md:px-8'>
      <h2 className='font-bold text-3xl text-center mb-8 text-gray-800'>Things to Buy</h2>
      {basket.length === 0 ? (
        <p className='text-center text-gray-500'>Your basket is empty.</p>
      ) : (
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {basket.map((item) => (
              <article key={item.id} className='bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-full h-48 object-cover rounded-md mb-4'
                />
                <h4 className='text-xl font-semibold text-gray-700 mb-2'>{item.title}</h4>
                <p className='text-lg font-bold text-gray-800 flex justify-between'>
                    {item.price}
                    <span>Count: {item.quantity}</span>
                </p>
                <button 
                    onClick={()=>removeBasket(item)}
                    className='mt-4 w-full py-2 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300'
                    >
                    Remove Item
                </button>
              </article>
            ))}
          </div>
          <div className='mt-8 text-center w-full border-t-2 border-gray-300 mb-4'>
            <h3 className='text-2xl font-semibold text-gray-800'>Total: ${calculateTotal()}</h3>
          </div>
          
            <button type = 'button' 
              onClick={()=>handleClearBasket()} 
              className='w-full py-2 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300'>
                Send order</button>
          
        </div>
      )}
    </div>
  );
};

export default Basket;

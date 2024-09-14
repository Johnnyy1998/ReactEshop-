import { createContext, useState } from "react";

export const MessageContext = createContext();

const ContextProvider = ({children})=>{
    const [basket, setBasket] = useState([]);

        const handleBasket = (item) => {
            setBasket((prevBasket) => {
                // Zkontroluj, jestli už položka v košíku existuje
                const existingItem = prevBasket.find(basketItem => basketItem.id === item.id);
        
                if (existingItem) {
                    // Pokud existuje, zvyš quantity o 1
                    return prevBasket.map(basketItem =>
                        basketItem.id === item.id
                            ? { ...basketItem, quantity: basketItem.quantity + 1 }
                            : basketItem
                    );
                } else {
                    // Pokud neexistuje, přidej ji s quantity 1
                    return [...prevBasket, { ...item, quantity: 1 }];
                }
            });
        };

    const removeBasket = (newItem) =>{
        if(newItem.quantity == 1)
        {setBasket((prevBasket) => prevBasket.filter(item=> item.id !== newItem.id)) 
        }else{
            setBasket((prevBasket) => prevBasket.map(item => item.id ===newItem.id ? { ...item, quantity: item.quantity - 1}: item));
            
        }
    }

    const clearBasket = ()=>{
        setBasket([])
    }

    return(
        <MessageContext.Provider value={{basket,handleBasket,removeBasket, clearBasket}}>
            {children}
        </MessageContext.Provider>
    )
}
export default ContextProvider;
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = ({data}) => {
    const { state, addProductToShow, addProductToCart } = useContext(ShoppingCartContext);

    const addProductToCartShopping = (event, data) => {
        event.stopPropagation()
        addProductToCart(data)
    }

    const renderIcon = (id) => {
        const isInCart = state.cartProducts.filter(product => product.id === id).length > 0;

        if(isInCart) {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductToCartShopping(event,data)}
                >
                    <CheckIcon 
                        className='h-6 w-6 text-white'
                    >
                    </CheckIcon>
                </div>
            )
        } else {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductToCartShopping(event,data)}
                >
                    <PlusIcon 
                        className='h-6 w-6 text-black'
                    >
                    </PlusIcon>
                </div>
            )
        }
    }
    
    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60"
            onClick={() => addProductToShow(data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
                <img 
                    src={data.images[0]} 
                    alt={data.title}
                    className="w-full h-full object-cover rounded-lg"
                />
            {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-ligth">{data.title}</span>
                <span className="text-sm font-medium">{data.price}</span>
            </p>
        </div>
    );
}

export default Card;
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'

const Card = ({data}) => {
    const { addCount, addProductToShow} = useContext(ShoppingCartContext);

    const showProductDetail = (productDetail) => {
        addProductToShow(productDetail)
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60"
            onClick={() => showProductDetail(data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
                <img 
                    src={data.images[0]} 
                    alt={data.title}
                    className="w-full h-full object-cover rounded-lg"
                />
                <span 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={() => addCount()}
                >
                <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </span>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-ligth">{data.title}</span>
                <span className="text-sm font-medium">{data.price}</span>
            </p>
        </div>
    );
}

export default Card;
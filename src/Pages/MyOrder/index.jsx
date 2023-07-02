import { useContext } from "react";
import { Link } from "react-router-dom";
import {  useParams } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import OrderCard from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";


const MyOrder = () => {
    const { state } = useContext(ShoppingCartContext);
    const params = useParams();
    const indexOrderPath = isNaN(Number(params.id)) ? state.order?.length - 1 : Number(params.id);
    return (
        <>
             <div className='flex items-center justify-center relative w-80 mb-6'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
                </Link>
                <h1>MyOrder</h1>
            </div>
            <div className='flex flex-col w-80'>
                { state.order?.[indexOrderPath]?.products.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id} 
                        title={product.title} 
                        imageUrl={product.images} 
                        price={product.price}
                    />
                ))}
            </div>
        </>
    );
}

export default MyOrder;
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
    const { state, closeProductDetail } = useContext(ShoppingCartContext);
    return (
        <aside
            className={`product-detail ${state.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2>Product Detail</h2>
                <XMarkIcon 
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={closeProductDetail}
                >
                </XMarkIcon>
            </div>
            <figure className='px-6'>
                <img 
                    className='w-full h-full rounded-lg'
                    src={state.productToShow.images[0]}
                    alt={state.productToShow.title}
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{state.productToShow.price}</span>
                <span className='font-medium text-md'>{state.productToShow.title}</span>
                <span className='font-light text-sm'>{state.productToShow.description}</span>
            </p>
        </aside>
    );
}

export default ProductDetail;
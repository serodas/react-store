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
                    className='h-6 w-6 text-black'
                    onClick={closeProductDetail}
                >
                </XMarkIcon>
            </div>
        </aside>
    );
}

export default ProductDetail;
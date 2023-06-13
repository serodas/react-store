import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCart from '../OrderCart';
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const CheckoutSideMenu = () => {
    const { state, closeCheckoutSideMenu } = useContext(ShoppingCartContext);
    return (
        <aside
            className={`checkout-side-menu ${state.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2>My Order</h2>
                <XMarkIcon 
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={closeCheckoutSideMenu}
                >
                </XMarkIcon>
            </div>
            <div className='px-3'>
                { state.cartProducts.map(product => (
                    <OrderCart key={product.id} title={product.title} imageUrl={product.images} price={product.price}/>
                ))}
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;
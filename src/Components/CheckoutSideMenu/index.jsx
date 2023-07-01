import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCart from '../OrderCart';
import totalPrice from '../../Utils';
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const CheckoutSideMenu = () => {
    const { state, closeCheckoutSideMenu , setCartProducts} = useContext(ShoppingCartContext);

    const handleDeleteProduct = (id) => {
        const filteredProducts = state.cartProducts.filter(product => product.id !== id);
        setCartProducts(filteredProducts);
    }

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
            <div className='px-3 overflow-y-scroll'>
                { state.cartProducts.map(product => (
                    <OrderCart 
                        key={product.id}
                        id={product.id} 
                        title={product.title} 
                        imageUrl={product.images} 
                        price={product.price}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                ))}
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium text-2xl'>${totalPrice(state.cartProducts)}</span>
                </p>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;
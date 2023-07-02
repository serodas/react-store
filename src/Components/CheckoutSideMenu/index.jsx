import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import totalPrice from '../../Utils';
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const CheckoutSideMenu = () => {
    const { state, closeCheckoutSideMenu , setCartProducts, setOrder } = useContext(ShoppingCartContext);

    const handleDeleteProduct = (id) => {
        const filteredProducts = state.cartProducts.filter(product => product.id !== id);
        setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date().toLocaleDateString(),
            products: state.cartProducts,
            totalProducts: state.cartProducts.length,
            totalPrice: totalPrice(state.cartProducts)
        }

        setOrder(orderToAdd);
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
            <div className='px-3 overflow-y-scroll flex-1'>
                { state.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id} 
                        title={product.title} 
                        imageUrl={product.images} 
                        price={product.price}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                ))}
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium text-2xl'>${totalPrice(state.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button> 
                </Link>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
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
        </aside>
    );
}

export default CheckoutSideMenu;
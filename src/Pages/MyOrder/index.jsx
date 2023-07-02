import { useContext } from "react";
import OrderCart from "../../Components/OrderCart";
import { ShoppingCartContext } from "../../Context";

const MyOrder = () => {
    const { state } = useContext(ShoppingCartContext);

    return (
        <div>
            MyOrder
            <div className='flex flex-col w-80'>
                { state.order?.slice(-1)[0].products.map(product => (
                    <OrderCart 
                        key={product.id}
                        id={product.id} 
                        title={product.title} 
                        imageUrl={product.images} 
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyOrder;
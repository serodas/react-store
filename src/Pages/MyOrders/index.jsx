import { useContext } from "react";
import { Link } from "react-router-dom";
import OrderCards from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

const MyOrders = () => {
    const { state } = useContext(ShoppingCartContext);
    return (
        <>
            <div className='flex items-center justify-center relative w-80 mb-6'>
                <h1 className='font-medium text-xl'>MyOrders</h1>
            </div>
            {
                state.order.map((order,index) => (
                    <Link to={`/my-orders/${index}`} key={index}>
                        <OrderCards
                            key={index}
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                            date={order.date}
                        /> 
                    </Link>
                ))
            }
        </>
    );
}

export default MyOrders;
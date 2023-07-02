import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCart = ({id, title, imageUrl, price, handleDeleteProduct}) => {
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl[0]} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {
                    handleDeleteProduct &&                 
                    <XMarkIcon
                        onClick={()=>handleDeleteProduct(id)}
                        className="h-6 w-6 text-black cursor-pointer "
                    />
                }
            </div>
        </div>
    );
}

export default OrderCart;
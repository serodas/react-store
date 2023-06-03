const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"> Electronics</span>
                <img 
                    src="https://images.pexels.com/photos/17047402/pexels-photo-17047402/free-photo-of-la-gravedad-del-lugar.jpeg" 
                    alt="headphones"
                    className="w-full h-full object-cover rounded-lg"
                />
                <span 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                >
                    +
                </span>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-ligth">Headphones</span>
                <span className="text-sm font-medium">$300</span>
            </p>
        </div>
    );
}

export default Card;
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { ShoppingCartContext } from "../../Context";

const Home = () => {
    const { state, setSearchValue } = useContext(ShoppingCartContext)

    const params = useParams();
    const category = params.category

    let filteredItems = [];
    if(state.searchValue.length === 0) {
      filteredItems = state.items;
    } else {
      filteredItems = state.items.filter((item) => {
          return item.title.toLowerCase().includes(state.searchValue.toLowerCase());
      });
    }

    if(category) {
        filteredItems = filteredItems.filter((item) => {
            return item.category.name.toLowerCase().includes(category.toLowerCase());
        });
    }

    return (
        <>
            <div className='flex items-center justify-center relative w-80 mb-6'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input 
                type="text" 
                placeholder="Search a product" 
                className="w-80 max-w-screen-lg px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                { filteredItems?.map((item) => (
                    <Card key={item.id} data={item}/>
                ))}
            </div>
            <ProductDetail/>
            <CheckoutSideMenu/>
        </>
    )
}

export default Home;
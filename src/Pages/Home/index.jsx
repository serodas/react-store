import  { useState, useEffect } from "react";
import Card from "../../Components/Card";

const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://api.escuelajs.co/api/v1/products")
                const data = await response.json()
                setItems(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            { items?.map((item) => (
                <Card key={item.id} data={item}/>
            ))}
        </div>
       
    )
}

export default Home;
import { createContext } from "react"

const ShoppingCartContext = createContext()
const initialState = {}

const ShoppingCartProvider = ({children}) => {
    return (
        <ShoppingCartContext.Provider value={initialState}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider
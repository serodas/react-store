import { createContext } from "react"
import useInitialState from "../Components/Hooks/useInitialState"

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    const initialState = useInitialState();
    return (
        <ShoppingCartContext.Provider value={initialState}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }
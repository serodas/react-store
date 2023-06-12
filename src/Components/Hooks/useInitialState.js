import { useState } from "react";

const initialState = {
    count: 0,
    isProductDetailOpen: false,
    productToShow: {
        title: "",
        price: "",
        description: "",
        images: [],
    }
}
const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addCount = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }

    const openProductDetail = () => {
        setState({
            ...state,
            isProductDetailOpen: true
        })
    }

    const closeProductDetail = () => {
        setState({
            ...state,
            isProductDetailOpen: false
        })
    }

    const addProductToShow = (product) => {
        setState({
            ...state,
            isProductDetailOpen: true,
            productToShow: {
                title: product.title,
                price: product.price,
                description: product.description,
                images: product.images,
            }
        })
    }

    return {
        state,
        addCount,
        openProductDetail,
        closeProductDetail,
        addProductToShow
    }
}

export default useInitialState;
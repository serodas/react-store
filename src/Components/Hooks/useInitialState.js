import { useState } from "react";

const initialState = {
    count: 0,
    isProductDetailOpen: false,
    isCheckoutSideMenuOpen: false,
    productToShow: {
        title: '',
        price: '',
        description: '',
        images: [],
    },
    cartProducts: [],
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
            },
        })
    }

    const addProductToCart = (product) => {
        setState({
            ...state,
            count: state.count + 1,
            isCheckoutSideMenuOpen: true,
            cartProducts: [...state.cartProducts, product]
        })
    }

    const closeCheckoutSideMenu = () => {
        setState({
            ...state,
            isCheckoutSideMenuOpen: false
        })
    }

    return {
        state,
        addCount,
        openProductDetail,
        closeProductDetail,
        addProductToShow,
        closeCheckoutSideMenu,
        addProductToCart,
    }
}

export default useInitialState;
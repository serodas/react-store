import { useState, useEffect } from "react";

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
    order: [],
    items: [],
    searchValue: '',
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

    const setCartProducts = (products) => {
        setState({
            ...state,
            cartProducts: products,
            count: products.length,
        })
    }

    const setOrder = (order) => {
        setState({
            ...state,
            order: [...state.order, order],
            cartProducts: [],
            count: 0,
            searchValue: '',
        })
    }

    const setSearchValue = (value) => {
        setState({
            ...state,
            searchValue: value
        })
    }

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://api.escuelajs.co/api/v1/products")
                const data = await response.json()
                setState({
                    ...state,
                    items: data
                })
            } catch (error) {
                console.error(error)
            }
        }
        fetchItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        state,
        addCount,
        openProductDetail,
        closeProductDetail,
        addProductToShow,
        closeCheckoutSideMenu,
        addProductToCart,
        setCartProducts,
        setOrder,
        setSearchValue,
    }
}

export default useInitialState;
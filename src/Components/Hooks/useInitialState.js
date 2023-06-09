import { useState } from "react";

const initialState = {
    count: 0,
    isProductDetailOpen: false,
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

    return {
        state,
        addCount,
        openProductDetail,
        closeProductDetail
    }
}

export default useInitialState;
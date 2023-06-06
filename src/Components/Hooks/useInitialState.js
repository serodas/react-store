import { useState } from "react";

const initialState = {
    count: 0
}
const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addCount = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }

    return {
        state,
        addCount
    }
}

export default useInitialState;
// typescript react-ts redux-saga>dva umi antd-design-pro



/* import React, {useState, useEffect} from 'react'

function Hook() {
    const [count, setCount] = useState(100)

    useEffect(() => {
        console.log('componentDidMount');
        console.log('componentDidMountUpdate');

        return () => {
            console.log('componentWillUnmount');
        }
    }, [count])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click me +++</button>
            <button onClick={() => setCount(count - 1)}>click me ---</button>
        </div>
    )
}

export default Hook */


/* import React, {useState, useEffect, useReducer} from 'react'

const reducer = function (state, action) {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return {count: 0}
        default:
            return {count: state.count}
    }
}

function Hook() {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    const {count} = state

    return (
        <div>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <span>{count}</span>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        </div>
    )
}

export default Hook */



// 自定义hook
import React, {useState, useEffect, useReducer} from 'react'
import {useAxios} from './useAxios'


function Hook() {
    let url = 'http://localhost:3001/banner';
    const [isLoading, response, error] = useAxios(url, [])

    console.log(isLoading, response, error);

    return (
        <div>
            {
                isLoading
                ? (<p>loading....</p>)
                : (
                    error
                    ? (<p>error</p>)
                    : (<p>success</p>)
                )
            }
        </div>
    )
}

export default Hook;
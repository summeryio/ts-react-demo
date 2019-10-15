// 点击改变颜色
/* import React from 'react';

interface Props {
    name: string
}

interface State {
    color: 'red' | 'blue'
}

class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            color: 'red'
        }
    }

    public changeColor = (ev: React.MouseEvent<HTMLButtonElement>) => {
        console.log(ev);
        
        let {color} = this.state

        if (color === 'red') {
            this.setState({
                color: 'blue'
            })
        }

        if (color === 'blue') {
            this.setState({
                color: 'red'
            })
        }
    }

    public render() {
        let {name} = this.props
        let {color} = this.state
        
        return (
            <React.Fragment>
                <p style={{color}}>{name}</p>
                <button onClick={this.changeColor}>点击切换颜色</button>
            </React.Fragment>
        )
    }
}

export default Hello; */


// useReducer 点击改变颜色
import React, {useReducer} from 'react'

interface iProps {
    name: string
}
interface iState {
    color: 'red' | 'blue'
}
interface iAction {
    type: string,
    payload: any
}

const reducer = (state: iState, action: iAction) => {
    const {type, payload} = action

    switch(type) {
        case 'COLOR_CHANGE':
            return {...state, color: payload}
        default:
            return state
    }
}

const Hello = (props: iProps) => {
    const {name} = props
    const initState: iState = {
        color: 'red'
    }
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        
        
        <div>
            <p style={{color: state.color}}>{name}</p>
            <button onClick={() => {
                dispatch({
                    type: 'COLOR_CHANGE',
                    payload: state.color === 'red' ? 'blue' : 'red'
                })
            }}>changeColor</button>
        </div>
    )
}

export default Hello
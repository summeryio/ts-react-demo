import React from 'react';

interface Props {
    name: string
}

class Hello extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        let {name} = this.props
        
        return (
            <div>{name}</div>
        )
    }
}

export default Hello;

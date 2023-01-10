import React from 'react';
class Span extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <span>{this.props.text}</span>
    }
}
export default Span
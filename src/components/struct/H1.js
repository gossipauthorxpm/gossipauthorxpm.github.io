import React from "react";

class H1 extends React.Component {
    render() {
        return <h1>
            {this.props.text}
        </h1>
    }
}

export default H1
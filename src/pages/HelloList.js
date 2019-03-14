import React from 'react';

class HelloList extends React.Component {
    render() {
        return (
            <div>
            {this.props.children}
            <ul>
                <li> Instagram {this.props.name} </li>
                <li> WhatsApp {this.props.name}</li>
                <li> Oculus {this.props.name}</li>

            </ul>
        </div>
        );
    }
}
export default HelloList;
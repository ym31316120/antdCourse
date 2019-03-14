import React from 'react';

class HelloList extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value :"default"
        };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(){
        this.setState({
            value:"X"
        })
    }

    render() {
        return (
            <div>
            {this.props.children}
            <ul>
                <li> Instagram {this.props.name} </li>
                <li> WhatsApp {this.props.name}</li>
                <li> Oculus {this.props.name}</li>

            </ul>
            <button onClick={this.changeValue} >{this.state.value}</button>
        </div>
        );
    }
}
export default HelloList;
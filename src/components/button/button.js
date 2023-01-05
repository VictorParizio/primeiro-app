import React, { Component } from 'react'
import './button.css'
/*
const Button = (props) => {
    return <button className="btn">{props.label}</button>
}
*/

class Button extends Component {
    render(){
    return <button className="btn">{this.props.label}</button>
    }
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button
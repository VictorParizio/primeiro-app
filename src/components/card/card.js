import React from 'react'
import './card.css'

/*
class Card extends React.Component {
    render(){
        return(
            <div className='card'>
                <h3>{this.props.title}</h3>
                <p>esse é o texto do carde</p>
            </div>
        )
    }
}
*/

const Card = ({title}) => {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>esse é o texto do card</p>
        </div>
    )
}

export default Card
import React, { Component } from 'react';

class Quotes extends Component {
    
    componentWillMount()
    {
        this.style = {
            right : this._randomBetween(0, window.innerWidth-150) + 'px',
            top : this._randomBetween(0, window.innerHeight - 150) + 'px',
            transform : 'rotate( ' + this._randomBetween(-15, 15) + 'deg)'                    
        };                           
    }

    _randomBetween(min, max)
    {
        return (min + Math.ceil(Math.random() * max));
    }

    render()
    {   return(
            <div 
                ref={(c) => this._input = c} 
                className='quote' style = {this.style}> 
                <p>{this.props.children}</p>
            </div>
        );
    };
}
export default Quotes;
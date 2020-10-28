import React, { Component } from 'react'; //parent component for Quotes.
import Quotes from './Quotes';

class Board extends Component
{   
    constructor(props) 
    {   super(props);
        this.state = 
        {
            notesStringArray: []
        }
    }
    
    _nextId()
    {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    _eachQuote(element, i)
    {   return (
        <Quotes key={element.id} index={i}>{element.note}</Quotes>
        );
    }
    
    async randomFact () { 
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
        const data = await response.json();
        this._add(data.text)
        // return data;
    };
    
    _add(text)
    {   var array = this.state.notesStringArray;
            array.push({
                        id : this._nextId(),
                        note : text
                    });
            JSON.stringify(array);
            this.setState({notesStringArray : array});
    }
    render()
    {  
        return(
            <div className='board'> 
                {this.state.notesStringArray.map(this._eachQuote)}
                <button className='btn btn-sm glyphicon glyphicon-plus btn-success' 
                onClick={() => {this.randomFact()}}>+</button>    
            </div>
        );
    }
}   

export default Board;    
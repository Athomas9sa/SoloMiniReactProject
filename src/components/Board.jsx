import React, { Component } from 'react';
import Quote from './Quote';
import { TextField, Button } from '@material-ui/core';
import Modal from "./Modal";
      
class Board extends Component
{    constructor(props) 
    {   super(props);
        this.state = 
        {   notesStringArray: [],
            show: false,
            recipient: "",
        }
    }
    _handleText (e)
    {       const accountSid = 'AC9105b938bad3b348077f01c23623b641'; 
            const authToken = '[ea5080782856b854c4e5d08044a74a0a]'; 
            const client = require('twilio')(accountSid, authToken);
            client.messages 
                  .create({ 
                     body: 'Hi there!', 
                     from: '+14159933857',
                     statusCallback: 'http://postb.in/1234abcd',       
                     to: this.recipient,
                   }) 
                  .then(message => console.log(message.sid)) 
                  .done();
                  client.messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
    }
    _handleToggle(e) 
    {   this.setState ({
            show: !this.state.show 
        }) 
    }
    _nextId()
    {   this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }
    _eachQuote(element, i)
    {   return (
            <Quote key={element.id}
                    index={i}>{element.quote}
            </Quote>
        );
    }
    async randomFact () { 
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
        const data = await response.json();
        this._add(data.text)
    };
    _add(text)
    {   var array = this.state.notesStringArray;
            array.push({
                        id : this._nextId(),
                        quote : text
                    });
            JSON.stringify(array);
            this.setState({notesStringArray : array});
    }
    


    render(){
        const { recipient } = this.state
        return(
            <>
                { !this.state.show &&(
                    <Button
                    // class="toggle-button"
                    id="button"
                    variant="outlined" 
                    color="Primary" 
                    onClick={e => {
                        this._handleToggle(e);
                    }}
                    >Post To Cat-a-Log
                </Button>
                ) }
                <Modal 
                    onClose={()=>{this._handleToggle()}} show={this.state.show} buttonValue = 'Post To Cat-a-Log' handleRandom ={()=>{this.randomFact()}} >
                    
                    <form >
                        <TextField 
                            id="outlined-basic" 
                            label="Phone" 
                            variant="outlined" 
                            value={recipient} 
                            onChange={e => this.setState({ recipient: e.target.value })}/>
                        <Button
                            id="button"
                            variant="outlined" 
                            color="Primary" 
                            onClick={e => {this._handleText(e);}}>Send Text
                        </Button>
                    </form>

                </Modal>

            <div className='board'> {this.state.notesStringArray.map(this._eachQuote)}</div>
            </>
        );
    }
}   
export default Board;  

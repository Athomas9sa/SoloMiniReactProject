import React, { Component } from 'react';
import { Container } from "bloomer";
import FaceCards from './components/FaceCards';
import "bulma/css/bulma.css";
import './App.css';



class App extends Component {
  state = { 
    title: '',
    faces: "",
    mugshot: "",
    emotions: [],
    book_date: "",
    error:false,
    errorMessage: "errorMessage"
  };

  loadData = async () => {//asyncPROMISEFUNCTIONtofetchdatafromapiandreturnthatdata
    const response = await fetch(' http://www.JailBase.com/api/1/recent/?source_id=az-mcso');
    const data = await response.json();//awaitislikeatimerwaitingfordatafromurlassignittovar
    return data;
  };

  handleClick = async () => {
    const newUserData = await this.loadData(); //waitfromloaddatafunctiontoloaddataandnewvarakathereturn:data
    this.setState({ //wearesettingthestatefunctionthattakesinanobjectwithkeyvaluepairs
      title: newUserData.value,
      faces: [
        ...this.state.faces, //spreadingthestateofquotesarrayandaddvalueinsidearraybrackets
        newUserData.value
      ],
    });
  };

  async componentDidMount() { //alifecyclefunction,datawillrunimmediatlyexecuteinthedom
    }  catch (error) {
        this.setState({
          error: true,
          errorMessage: error.message,
        });
  }

  render() { //renderingtheJSXclassfunctiontoreturn:
    
    const { mugshot, book_date } = this.state; //varcreatefortitleandquotestatereturn
    return (
      <div className="App">
        <Container isFluid>
        <header className="App-header">
        <h1>{mugshot}</h1>
        </header>
        <button onClick={this.handleClick}>Face It!</button>//goeswithclickfunction
        <FaceCards userData={book_date} />
        </Container>
      </div>
    )};}

export default App;
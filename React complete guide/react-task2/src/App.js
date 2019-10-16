import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from "./CharComponent";

class App extends Component  {

  state = {
    text:
    {inputText: "here",}
  };
  

  inputEventHandler = (event) => {
    
    
this.setState({text: {inputText: event.target.value}
  
})
const txtLength = [...this.state.text.inputText];

  }
// // const txtLength = Object.keys(this.state.persons).length;
//   inputLengthHandler = (event) => {
//     // const txtLength = this.state.text.length;
//     // console.log(this.state.text.length)
//   }

deleteItemHandler = (index) => {
  const chars = [...this.state.text.inputText];
  chars.splice(index, 1);
  this.setState({text: chars})
}

  render() {

const charList = this.state.text.inputText.split('').map((ch, index) => {
  return <CharComponent charecter = {ch} key={index}/>
})
  return (
    <div>



     <input
       label= "name"
       type = "text"
       onChange = {this.inputEventHandler}
       value = {this.state.text.inputText}
     />
     <p>Output here: {this.state.text.inputText}</p>
    
     <ValidationComponent
      changed = {(event) => this.inputEventHandler(event)}
       inputText = {this.state.text.inputText}
       length = {this.state.text.inputText.length}
     />

 {charList};
    
    </div>
  );
        
};
}
export default App;

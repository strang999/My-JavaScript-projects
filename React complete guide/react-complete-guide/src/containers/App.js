import React, { Component } from "react";
import 'typeface-roboto';
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';
import Auxilliary from '../hoc/Auxilliary';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

// // CLASS BASED STATE COMPONENTS
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
    state = {
      persons: [
        {id:"123",  name: "max", age: 22 },
        {id:"125",  name: "manu", age: 123 },
        {id:"128",  name: "Stepth", age: 12 }
        
      ],
      otherState: "someothervavue",
      showPersons: false,
      showCockpit: true,
      changedCounter: 0,
      authenticated: false
    };


    static getDerivedStateFromProps(props, state) {
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
    }


    
  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

comonentDidUpdate() {
  console.log('[App.js] componentDidUpdate')
}

deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

  nameChangerHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};

    person.name = e.target.value;

    const persons = [...this.state.persons];
persons[personIndex] = person;

    this.setState((prevState, props) => {
    return {
      persons: persons,
       changedCounter: prevState.changedCounter + 1 };
    });
  }

  ageChangerHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};

    person.age = e.target.value;

    const persons = [...this.state.persons];
persons[personIndex] = person;

    this.setState({persons: persons });
  }

  togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
console.log("object");
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  };
  render() {
    console.log('[App.js] render')

let persons = null;
    if (this.state.showPersons) {
      persons = 
        <Persons persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangerHandler}
        changedage = {this.ageChangerHandler} 
        isAuthenticated = {this.state.authenticated}
        />;
    }

    
    return (
      <Auxilliary >
            <button onClick = {() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
      <AuthContext.Provider
       value={{
         authenticated: this.state.authenticated,
          login: this.loginHandler
          }}
          >
        {this.state.showCockpit ? (
          <Cockpit 
        title = {this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength= {this.state.persons.length} 
        clicked={this.togglePersonsHandler}
        />)
         : null}
        
          {persons}
          </AuthContext.Provider>
</Auxilliary>
    );
  }
}

export default withClass(App, classes.App);

import React, {Component }from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
this.inputElementRef.current.focus();
  }
  render(){
  console.log('[Person.js] rendering...');
    return (
    <React.Fragment>
    <AuthContext.Consumer>
      {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
    </AuthContext.Consumer>
   
          <p  onClick = {this.props.click}> I am {this.props.name} and I am {this.props.age} years </p>,
          <p >{this.props.children}</p>,

      <input
      // ref= {(inputEl) => {this.inputElement = inputEl}}
      // ref={this.inputElementRef}
        label="Name"     
        onChange={this.props.changed}
         value={this.props.name}
        variant="filled"

        />

<input 
      ref={this.inputElementRef}

        label="Age"
        value={this.props.age}
        onChange={this.props.changedage}
        type="number"
      
        variant="filled"
      />
      </React.Fragment>)
    }
    }
  Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
  };
export default withClass(Person, classes.Person);

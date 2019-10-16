import React, {Component} from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";


class App extends Component {

state = {
  users:
    {username: "Anton", age: 23}

  
};

userNameHandler = (e) => {
this.setState({
  users:
    {username: e.target.value, age: 23}
})

}

swutchAgeHandler = (newAge) => {
  this.setState( {
    users: {name: "Anton", age: newAge}
  })
}

render() {
  const style = {
    backgroungColor: "green",
    border: "2px solid blue",
    fontFamily: "typeface-roboto",
    padding: "30px"
  };
  return (
    <div style={style}>
<UserInput 
changed = {this.userNameHandler}
username = {this.state.users.username}

>Anton</UserInput>
<UserOutput username = {this.state.users.username}
            age =        {this.state.users.age}
            click = {this.swutchAgeHandler.bind(this, "233")}
  
>Anton</UserOutput>


</div>
  );
}
}
export default App;

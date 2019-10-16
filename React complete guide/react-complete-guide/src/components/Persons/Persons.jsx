import React, {PureComponent} from 'react';
import Person from './Person/Person';
class Persons extends PureComponent{
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[App.js] shouldComponentUpdate');
    //    if (nextProps.persons !== this.props.persons) {
    //     return true;
    //    } else { 
    //      return false;
    //     }
    //   }
    

getSnapshotBeforeUpdate(prevProps, nextProps) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};

}

componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate]')
    console.log(snapshot)
}

componentWillUnmount() {
    console.log('[Persons.jsx] componentWillUnmount');
}
    render() {
console.log('[Persons.js] rendering...');

   return (
  this.props.persons.map((person, index) => {
        return (
        <Person 
        click = {() => this.props.clicked(index)}
        
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
        changedage={(event) => this.props.changedage(event, person.id)}
        />
        );
    })
   )
   
}
}
export default Persons;
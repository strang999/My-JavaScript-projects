import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';
const Cockpit = (props) => {
  const toggleBtnRef = useRef();

  
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
//     setTimeout(() => {
// alert("DOne") 
//     }, 1000);

    return () => {
      console.log('[Cockpit.js] cleanup work in useEfferct');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit] 2nd useeffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEfferct');
    }
  });
    let assignedClasses = [];
    let btnClass = "";
    if (props.showPersons) {
    btnClass = classes.Red;
    }
    if (props.personsLength <=2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <=1) {
      assignedClasses.push(classes.bold); // red, bold
    }
return (
    <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className = {assignedClasses.join(' ')}> Working!</p>
      
        <button 
        ref={toggleBtnRef}
        className = {btnClass}
      
        onClick={props.clicked}> Toggle Persons</button>
      <AuthContext.Consumer> 
      {(context) =>  <button onClick={context.login}> Log in</button>}
      </AuthContext.Consumer>
    </div>
)
};
export default React.memo(Cockpit);
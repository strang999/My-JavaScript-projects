import React from 'react';

const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "5px solid blue",
    color: "blue"

}



const CharComponent = (props) => {

    // let chars = props.char.join('');
  
    return (
       <div style ={style}>
           {props.charecter}
         
       </div> 
    )
}
export default CharComponent
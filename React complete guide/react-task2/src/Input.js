import React from 'react';

const Input = (props) => {
    return(
<div>
<input
       label= "name"
       onChange = {props.changed}
       value = {props.value}
     />


</div>

    )
}
export default Input;
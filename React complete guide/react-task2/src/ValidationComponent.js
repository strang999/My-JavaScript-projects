import React from "react";

const ValidationComponent = (props) => {
    
    let cond = "Text long enought";
    if(props.length< 5) 
    cond =     "Text too short";
     
    else if (props.length> 8) cond = "Too long!";
return (
    
<div>
{/* { props.length > 5 ?
<p>Text long enought</p> :
<p> Text too short</p>
} */}
{cond}
</div>

)
}
export default ValidationComponent;
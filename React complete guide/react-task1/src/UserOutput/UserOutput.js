import React from 'react';
import "./UserOutput.css";

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p onClick = {props.click}> I am {props.username} </p>
            <p> My age {props.age}</p>

        </div>
    )
}
export default UserOutput
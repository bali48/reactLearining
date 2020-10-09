import React from 'react';

import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p>hello this is {props.name}</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name}></input>
            <span className="deleteSpan" onClick={props.deleted}>x</span>
        </div>
    )
}

export default person;
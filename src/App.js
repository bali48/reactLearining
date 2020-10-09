import React, { useState } from 'react';
import _ from 'lodash';
import './App.css';
import Person from './Person/Person';


const  App = () => {
    const localState = {
      Person: [
        {id: 0, name: 'ABC', age: 20},
        {id: 1, name: 'XYZ', age: 21},
        {id: 2, name: 'blabla', age: 22},
        {id: 3, name: 'wow', age: 23}
      ],
      someOther: 'this is Some Text',
      showList: false
    }
    const [personState, setPersonState] = useState(localState)

    const changeNamehandler = (event, id) => {
      event.persist();
      let localPersonState = [...personState.Person];
      localPersonState.map(person => {
          if(person.id === id) {
            person.name = event.target.value
          }
          return person
        }
      )
      // console.log(actualPerson)
      setPersonState((oldState) => ({
        ...oldState,
        Person : localPersonState
      }))
    }
    /* TODO:Delete Not Working Properly Index Issues */
    const deletePersonHandler = (id) => {
      // console.log('delete called')
      let localPersonState = [...personState.Person];
      const personIndex = _.findIndex(localPersonState, {id: id}); 
      localPersonState.splice(personIndex, 1)
      setPersonState((oldState) => ({
        ...oldState,
        Person : localPersonState
      }))
    }
    const renderListHandler = () => {
      setPersonState((oldState) => ({
          ...oldState,
          showList: !personState.showList
      }))
    }
    let personsList = () => {
      return personState.showList ? 
      (
        <div>
          {
            personState.Person.map( (singlePerson, personIndex) => {
             return  <Person 
              key={singlePerson.id}
              name={singlePerson.name} 
              age={singlePerson.age}
              changed={(event) => changeNamehandler(event, personIndex)}
              deleted={deletePersonHandler.bind(this, singlePerson.id)}
              >Child Text</Person>
            })
          }
        </div>
      ): null
    }
    return (
      <div className="App">
        <h1>hello World!</h1>
        <button onClick={renderListHandler}>
          {(!personState.showList) ? 'Show': 'Hide'} List
        </button>
        { personsList() }
      </div>
    );
  
}

export default App;

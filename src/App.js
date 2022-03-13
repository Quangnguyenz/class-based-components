// name and default import/export
//one default export per module 
// think of module as a file
import React from 'react';
import { name, ticket, person } from './data'

const App = () => {
  return (
    <section>
      <p> {name} is here with {ticket} </p>
      <p>{person.name}</p>
    </section>)
}

export default App;
// name and default import/export
//one default export per module 
// think of module as a file
import React from 'react';
import * as data from './data'

const App = () => {
  return (
    <section>
      <p> {data.name} is here with {data.ticket} </p>
      <p>{data.person.name}</p>
    </section>)
}

export default App;
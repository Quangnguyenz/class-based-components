// name and default import/export
// one default export per module 
// think of module as a file
import React, { Component } from 'react';
import * as data from './data'
import Banner from './components/Header/Banner'

const App = () => {
  return (
    <section>
      <p> {data.name} is here with {data.ticket} </p>
      <p>{data.person.name}</p>
      <Banner />
    </section>)
}

class AppClass extends Component {
  render() {
    return (
      <section>
        <p> {data.name} is here with {data.ticket} </p>
        <p>{data.person.name}</p>
        <Banner />
      </section>
    )
  }
}

export default AppClass;
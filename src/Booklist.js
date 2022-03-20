import React, { Component } from 'react'
import Book from "./Book";
export default class Booklist extends Component {
    render() {
        return (
            <section>
                <h1>A book list</h1>
                <Book />
            </section>
        )
    }
}

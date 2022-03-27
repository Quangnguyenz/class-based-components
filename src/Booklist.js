import React, { Component } from 'react'
import Book from "./Book";
import booksData from "./bookData"
export default class Booklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: booksData
        }
    }
    state = {
    }
    // this.setState({})
    render() {
        // const books = this.state.books.map((item) => item.book);

        return (
            <section>
                <h1>A book list</h1>
                {this.state.books.map((item) => <Book info={item} key={item.id} />)}
            </section>
        )
    }
}

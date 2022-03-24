import React, { Component } from 'react'
import Book from "./Book";
export default class Booklist extends Component {
    state = {
        books: [
            {
                book: "book 1",
                author: "john doe"
            },
            {
                book: "book 2",
                author: "bobby doe"
            }
        ]
    }
    // this.setState({})
    render() {
        const books = this.state.books.map((item) => item.book);

        return (
            <section>
                <h1>A book list</h1>
                <Book book={this.state.books[0]} />
                <Book book={this.state.books[1]} />
            </section>
        )
    }
}

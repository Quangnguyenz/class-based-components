import React, { Component } from 'react'
import Book from "./Book";
export default class Booklist extends Component {
    state = {
        books: [
            {
                id: 1,
                book: "book 1",
                author: "john doe"
            },
            {
                id: 2,
                book: "book 1",
                author: "john doe"
            },
            {
                id: 3,
                book: "book 1",
                author: "john doe"
            },

        ]
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

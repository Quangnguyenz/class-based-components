import React, { Component } from 'react'
import Book from "./Book";
export default class Booklist extends Component {

    books = [
        {
            book: "book 1",
            author: "john doe"
        },
        {
            book: "book 2",
            author: "bobby doe"
        }
    ];

    render() {
        return (
            <section>
                <h1>A book list</h1>
                <Book book={this.books[0]} />
                <Book book={this.books[1]} />
            </section>
        )
    }
}

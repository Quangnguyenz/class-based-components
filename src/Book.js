import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        console.log(this.props)
        return (
            <article>
                <h3>book :{ }</h3>
                <h5>author :</h5>
            </article>
        )
    }
}

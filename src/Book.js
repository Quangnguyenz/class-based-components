import React, { Component } from 'react'



export default class Book extends Component {
    render() {
        // console.log(this.props)
        const { img, title, author } = this.props.info;
        return (
            <article className='book'>
                <img src={img} alt="" />
                <h3>book : {title}</h3>
                <h5>author : {author}</h5>
            </article>
        )
    }
}

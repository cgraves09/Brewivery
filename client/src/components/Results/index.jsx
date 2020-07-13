import React, { Component } from 'react'
import API from '../../utils/API'
export default class Results extends Component {
    postBook = (book) => {
        let dbBook = {
            thumbnail: book.thumbnail,
            title: book.title,
            author: book.author,
            synopsis: book.synopsis 
        }
        console.log(dbBook)
      API.saveBook(dbBook)
        .then(res => alert(`${dbBook.title} has been saved!`))
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div className='container'>
            <div className="card mb-3">
            <div className="row no-gutters">
                    <div className="col-md-4 image">
                        <img src={this.props.thumbnail} alt=""/>
                    </div>
                    <div className="col-md-8 info">
                        <h1>{this.props.title}<span><h3>{this.props.author.join(', ') }</h3></span></h1>
                        <hr className='lineBreak' />
                        <p>{this.props.synopsis}</p>
                        <button className='btn btn-primary btn-lg btn-block' onClick={() => {this.postBook(this.props)}}>Save Book</button>                
                    </div>
            </div>
            </div>
        </div>
        )
    }
}

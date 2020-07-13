import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Results from '../components/Results';
import axios from 'axios';

class Books extends Component {
  state = {
    books: [],
    query: ''
  };
    
  getBooks = (event) => {
    event.preventDefault();
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.query)
    .then(res => {
      this.displayRes(res.data);
    })
  }
  displayRes = data => {
    this.setState({books: data.items})
  }

  handleChange = (event) => {
    this.setState({query: event.target.value})
  }

  render() {
    return (
        <div>
            <Jumbotron>
              <h1>React Google Book Search</h1>
              <h3> Search and Save your favorite Books! </h3>
            </Jumbotron>
            <div className='container'>
            <form>
                <div className="form-group">
                    <input className='form-control' name="Book" value={this.state.value} onChange={this.handleChange} placeholder="Book Name (required)" />
                </div>
              
              <button className='btn btn-primary btn-lg btn-block' onClick={this.getBooks}>Submit Book</button>
            </form>
        {this.state.books.map(book => {
          return (
              <Results key={book.id}
              author={book.volumeInfo.authors}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              synopsis={book.volumeInfo.description} />
          )
        })}
        </div>   
      </div>
    );
  }
}

export default Books;

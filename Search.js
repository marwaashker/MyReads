import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';
import BookContent from './book';


class Search extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState({query});
     console.log("hiiii" , query);
  }


  render() {
  
  
  const { books, updateShelf ,onMoveBook ,getBookShelf ,onSearchChange , queryBooks} = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
             
              onChange={(e) => onSearchChange(e.target.value)}
              />
          </div>

        </div>
        <div className="search-books-results">
         
          
            <div>
              <h3>Search returned {books} books </h3>

            <ol className="books-grid">
            {queryBooks instanceof Array &&
              queryBooks.map((book) => (
                <BookContent
                  key={book.id}
                  book={book}
                 updateShelf={this.updateShelf} 
                />
              ))}
          </ol>
            </div>
        
          
        </div>
      </div>
    );
  }
}

export default Search;

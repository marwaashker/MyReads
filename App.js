import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from'./bookshelf'
import Search from './Search'
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
   
    books: [],
   query: '',
    queryBooks: [],
   
  }
fetch() {
    BooksAPI.getAll().then( books => {
      this.setState({
        books,
        isLoading: false,
      })
    });
 }
componentDidMount() {
 	this.fetch();

 }

updateShelf = (book , shelf) => {
  this.setState({
  books: this.state.books.map(b => {
  b.id === book.id ? (b.shelf = shelf) : b;
  return b;
})
});
};





onSearchChange = (query) => {
    this.setState({
      queryBooks: [],
      
    });
    if (query.trim().length > 0) {
      BooksAPI.search(query).then((books) => {
        books !== undefined && this.setState(() => ({ queryBooks: books }));
        
      });
    } else {
      this.setState(() => ({ ...this.state, queryBooks: [], query: '' }));
      
    }
  console.log("hiii",query)
  };



  render() {
    return (
    
       <div className="app">
       
         <Route exact path="/" render={ () => (
           <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads </h1>
              </div>
             <BookShelf Allbooks={this.state.books} updateShelf={this.updateShelf}/>
             <div className="open-search">
               <Link to="/Search" >Add a book</Link>
             </div>
            </div>
         )} />
         <Route exact path="/Search" render={ () => (
           <Search Allbooks={this.state.books} updateShelf={this.updateShelf} 
              onSearchChange={this.onSearchChange}
              query={this.state.query}
              queryBooks={this.state.queryBooks}
            
             
        
             />
            )} />
      </div>
   
    )
  }
}

export default BooksApp

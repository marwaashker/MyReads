import React from 'react';
import BookContent from './book'

class BookShelf extends React.Component {
  render(){
    const Allbooks = this.props.Allbooks;
    const currentlyReading = Allbooks.filter( book => book.shelf === "currentlyReading");
    const wantToRead = Allbooks.filter(book => book.shelf === "wantToRead");
    const read = Allbooks.filter(book => book.shelf === "read");
                                console.log("hi",Allbooks); 
   
    
  return(
    
    <div className="list-books-content">
              <div>
    
                <BookContent books={currentlyReading} title={"Currently Reading"} updateShelf={this.props.updateShelf}/>

                <BookContent books={wantToRead} title={"Want to Read"} updateShelf={this.props.updateShelf}/>
                <BookContent books={read} title={"Read"} updateShelf={this.props.updateShelf}/>
              </div>
            </div>

    )  
  }
}
export default BookShelf
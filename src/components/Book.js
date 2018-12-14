import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfSwitcher from './ShelfSwitcher';
import noCoverImg from '../img/no-cover.jpg';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render() {
    const { book, books, changeShelf } = this.props;
    const coverImage = book.imageLinks && book.imageLinks.thumbnail
    ? book.imageLinks.thumbnail
    : noCoverImg;
    const title = book.title ? book.title : 'No title available';

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ backgroundImage: `url("${coverImage}")` }}
            />
            <ShelfSwitcher book={book} books={books} changeShelf={changeShelf} />
          </div>
          <div className="book-title">{title}</div>
          {/* Check for book authors*/
          book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
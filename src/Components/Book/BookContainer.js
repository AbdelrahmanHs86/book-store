import React, { Fragment } from 'react';

import { useSelector } from 'react-redux';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './book.css';



const BookContainer = () => {

  const books = useSelector(state => state.bookReducer);

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList bookslist={books.bookslist} loading={books.loading} />
        </div>
        <div className='col side-line'>
          <BookInfo selectedBook={books.selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;

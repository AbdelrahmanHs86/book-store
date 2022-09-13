import React, { Fragment, useEffect } from 'react';
import { getBooks, deleteBook } from '../../store/reducers/bookSlice';
import { useSelector, useDispatch } from 'react-redux';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './book.css';



const BookContainer = () => {

  const books = useSelector(state => state.bookReducer);
  const auth = useSelector((state) => state.authReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch])

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList bookslist={books.bookslist} loading={books.loading} loggedIn={auth.loggedIn} dispatch={dispatch} deleteBook={deleteBook} />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;

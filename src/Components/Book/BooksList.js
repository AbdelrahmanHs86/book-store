import React, { useEffect } from 'react';
import { selectBook, getBooks, deleteBook } from '../../store/reducers/bookSlice';
import { useSelector, useDispatch } from 'react-redux';


const BooksList = ({ bookslist, loading, error }) => {

  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch])


  return (
    <div>
      <h2>Books List</h2>
      {
        loading ? <div>Loading Books</div> :
          <ul className='list-group'>
            {
              bookslist.length > 0 ?
                bookslist.map((book) => (

                  <li key={book.id} className='list-group-item d-flex  justify-content-between align-items-center' >
                    <div>{book.title}</div>
                    <div className='btn-group' role='group'>
                      <button type='button' className='btn btn-primary' onClick={() => dispatch(selectBook(book))} disabled={!auth.loggedIn}>
                        Read
                      </button>
                      <button type='button' className='btn btn-danger' onClick={() => dispatch(deleteBook(book))} disabled={!auth.loggedIn}>
                        Delete
                      </button>
                    </div>
                  </li>
                ))

                :
                <div>No books</div>

            }
            {
              error &&
              <span className='w-25 h-25 d-inline-block alert alert-danger  mb-0' role='alert'>
                {error}
              </span>
            }

          </ul>
      }

    </div>
  );
};

export default BooksList;

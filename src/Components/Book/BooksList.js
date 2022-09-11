import React from 'react';

const BooksList = ({ bookslist }) => {

  return (
    <div>
      <h2>Books List</h2>
      <ul className='list-group'>
        {
          bookslist.length > 0 ?
            bookslist.map((book) => (

              <li key={book.id} className='list-group-item d-flex  justify-content-between align-items-center' >
                <div>{book.title}</div>
                <div className='btn-group' role='group'>
                  <button type='button' className='btn btn-primary'>
                    Read
                  </button>
                  <button type='button' className='btn btn-danger'>
                    Delete
                  </button>
                </div>
              </li>
            ))

            :
            <div>No books</div>
        }
      </ul>
    </div>
  );
};

export default BooksList;
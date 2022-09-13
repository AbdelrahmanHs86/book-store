import React, { Fragment } from 'react';

const BookInfo = ({ selectedBook }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {
        Object.keys(selectedBook).length > 0 ?
          <div>
            <p className='fw-bold'>Title:{selectedBook.title}</p>
            <p className='fw-light'>Description:{selectedBook.desc}</p>
            <p className='fst-italic'>Price:{selectedBook.price}</p>
            <p className='fst-italic'>Author:{selectedBook.author}</p>
          </div>
          :
          <div className='alert alert-secondary' role='alert'>
            There is no post selected yet. Please select!
          </div>
      }


    </Fragment>
  );
};

export default BookInfo;

import React, { useRef } from "react";
import { addBooks } from "../store/reducers/bookSlice";
import { useSelector, useDispatch } from "react-redux";

const Addform = () => {
  const auth = useSelector((state) => state.authReducer)
  const dispatch = useDispatch();

  const titleRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const desc = descRef.current.value;
    const bookData = { title, price, desc };
    dispatch(addBooks(bookData));

    titleRef.current.value = null;
    priceRef.current.value = null;
    descRef.current.value = null;
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              ref={titleRef}
              type="text"
              className="form-control"
              id="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              ref={priceRef}
              type="number"
              className="form-control"
              id="price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">
              Description
            </label>
            <textarea
              ref={descRef}
              className="form-control"
              id="Description"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="btn btn-primary"
            disabled={!auth.loggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;

import { Fragment } from 'react';
import Header from './Components/Header';
import AddForm from './Components/AddForm';
import Container from './Components/Container';
import BookContainer from './Components/Book/BookContainer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <AddForm />
      <Container>
        <BookContainer />
      </Container>
    </Fragment>


  );
}

export default App;

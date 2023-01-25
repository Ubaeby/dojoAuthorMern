import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import AuthorUpdate from './components/AuthorUpdate';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
            <Route element = {<AuthorList />} path="/" default />
            <Route element = {<AuthorForm />} path="/new"  />
            <Route element = {<AuthorUpdate /> } path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

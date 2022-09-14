import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetail from './components/BookDetails/BookDetail';
import { AppProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='about' element={<About />} />
          <Route path='book' element={<BookList />} />
          <Route path='/book/:id' element={<BookDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)

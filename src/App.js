import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
// import Page404 from './Crud/Page404';
import NewPost from './Crud/NewPost';
import Posts from './Crud/Posts';
import ViewPost from './Crud/ViewPost';
const url = 'http://localhost:7777';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <nav className="nav">
          <div >
            <Link to="/posts/new">
              <button className="btn-add">Создать пост</button>
            </Link>
          </div>
        </nav>

        <div className="page">
          <Routes>
            <Route path="/posts" element={<Posts url={url} />} />
            <Route path="/posts/new" element={<NewPost url={url} />} />
            <Route path="/posts/:id" element={<ViewPost url={url} />} />
            <Route path="*" element={<Posts url={url} />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}
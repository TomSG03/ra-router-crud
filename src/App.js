import React from 'react'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import ShiftPost from './Crud/ShiftPost';
import Posts from './Crud/Posts';
import SelectPost from './Crud/SelectPost';

export default function App() {
  return (
    <div className='App'>
      <HashRouter>

        <nav className="nav">
          <div className='head-title'>
            <Link to="/posts/new">
              <button className="btn-add">Создать пост</button>
            </Link>
          </div>
        </nav>

        <div className="page">
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/new" element={<ShiftPost title={'Создание'}/>} />
            <Route path="/posts/:id" element={<SelectPost />} />
            <Route path="*" element={<Posts />} />
          </Routes>
        </div>

      </HashRouter>
    </div>
  );
}
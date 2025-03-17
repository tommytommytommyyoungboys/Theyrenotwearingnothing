import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>React Frontend</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

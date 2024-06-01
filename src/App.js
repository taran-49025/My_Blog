import React from 'react';
import './App.css';
import TopBar from './TopBar';
import BlogPost1 from './BlogPost1';
import BlogPost2 from './BlogPost2';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="content">
        <BlogPost1 />
        <BlogPost2 />
      </div>
    </div>
  );
}

export default App;

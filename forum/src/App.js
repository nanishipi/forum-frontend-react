import './App.css';
import { useState, useEffect } from 'react'
import Thread from './components/thread';

function App() {
  return (
    <div className="App">
      <h1 className="pageTitle">Threads</h1>
      <Thread title="Cars" imagelink="https://imagescdn.dealercarsearch.com/DealerImages/12507/saved/2f2f0937.jpg"></Thread>
    </div>
  );
}

export default App;

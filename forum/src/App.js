import './App.css';
import { useState, useEffect } from 'react'
import Thread from './components/thread';

function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, []);

  return (
    <div className="App">
      <h1 className="pageTitle">Threads</h1>
      <Thread title="Cars" imagelink="https://imagescdn.dealercarsearch.com/DealerImages/12507/saved/2f2f0937.jpg"></Thread>
      <Thread title="Cats" imagelink="https://i.kym-cdn.com/entries/icons/mobile/000/026/489/crying.jpg"></Thread>
    </div>
  );
}

export default App;

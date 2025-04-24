import React from 'react';
import Home from './pages/Home';
import { EventProvider } from './context/EventContext';
import './styles.css';

export default function App() {
  return (
    <EventProvider>
      <div className="App">
        <h1>Event Planner</h1>
        <Home />
      </div>
    </EventProvider>
  );
}
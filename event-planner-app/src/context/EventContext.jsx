import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  const addEvent = evt => {
    setEvents([...events, evt]);
  };

  const updateEvent = updated => {
    setEvents(events.map(e => (e.id === updated.id ? updated : e)));
  };

  const deleteEvent = id => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
}
import React, { useContext, useState, useMemo } from 'react';
import { EventContext } from '../context/EventContext';
import EventCard from './EventCard';

export default function EventList({ onStartEdit }) {
  const { events, deleteEvent } = useContext(EventContext);
  const [search, setSearch]     = useState('');
  const [asc, setAsc]           = useState(true);

  const filtered = useMemo(
    () => events.filter(e => e.title.toLowerCase().includes(search.toLowerCase())),
    [events, search]
  );

  const sorted = useMemo(
    () => [...filtered].sort((a, b) => {
      const da = new Date(a.date), db = new Date(b.date);
      return asc ? da - db : db - da;
    }),
    [filtered, asc]
  );

  return (
    <div className="event-list">
      <div className="controls">
        <input
          type="text"
          placeholder="Search events…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={() => setAsc(!asc)}>
          Sort: {asc ? 'Old→New' : 'New→Old'}
        </button>
      </div>

      {sorted.length === 0 ? (
        <p>No events match.</p>
      ) : (
        sorted.map(evt => (
          <EventCard
            key={evt.id}
            event={evt}
            onEdit={onStartEdit}
            onDelete={deleteEvent}
          />
        ))
      )}
    </div>
  );
}
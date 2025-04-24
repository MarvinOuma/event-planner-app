import React, { useState } from 'react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

export default function Home() {
  const [editingEvent, setEditingEvent] = useState(null);

  return (
    <div className="home">
      <EventForm
        editingEvent={editingEvent}
        onFinishEdit={() => setEditingEvent(null)}
      />
      <EventList onStartEdit={evt => setEditingEvent(evt)} />
    </div>
  );
}

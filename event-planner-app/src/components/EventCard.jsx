import React from 'react';

export default function EventCard({ event, onEdit, onDelete }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p><em>{event.date}</em></p>
      {event.description && <p>{event.description}</p>}
      <button onClick={() => onEdit(event)}>Edit</button>
      <button onClick={() => onDelete(event.id)}>Delete</button>
    </div>
  );
}
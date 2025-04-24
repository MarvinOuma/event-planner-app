import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from '../context/EventContext';

export default function EventForm({ editingEvent, onFinishEdit }) {
  const { addEvent, updateEvent } = useContext(EventContext);
  const isEdit = Boolean(editingEvent);

  const [title, setTitle]           = useState('');
  const [date, setDate]             = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEdit) {
      setTitle(editingEvent.title);
      setDate(editingEvent.date);
      setDescription(editingEvent.description);
    }
  }, [editingEvent]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !date) return;

    const evt = { 
      id: isEdit ? editingEvent.id : Date.now(),
      title, 
      date, 
      description 
    };

    if (isEdit) {
      updateEvent(evt);
      onFinishEdit();
    } else {
      addEvent(evt);
    }

    setTitle('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        type="text"
        placeholder="Event title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">{isEdit ? 'Save' : 'Add Event'}</button>
      {isEdit && (
        <button type="button" onClick={onFinishEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}
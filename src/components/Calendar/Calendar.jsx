// Calendar.js
import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';

const months = [
  'january', 'february', 'march', 'april', 'may', 'june', 
  'july', 'august', 'september', 'october', 'november', 'december'
];

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, [selectedMonth]);

  const fetchEvents = async () => {
    setLoading(true);
    const monthTable = months[selectedMonth];  // e.g. "january", "february"
    const { data, error } = await supabase
      .from(monthTable)
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Error fetching events:', error);
    } else {
      setEvents(data);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Event Calendar</h1>
      <div>
        <label>Select Month: </label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? 
      <p>Loading events...</p> : 
      <div>{events.map((event) => (
      <div 
      key={event.id}>
        {event.id}
        {event.event}
        {event.day}
        </div>))}
      </div>
        }

    </div>
  );
};

export default Calendar;

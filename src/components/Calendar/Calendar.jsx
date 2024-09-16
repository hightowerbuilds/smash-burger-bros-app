
import './Calendar.css'
import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import { NavLink } from 'react-router-dom';

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
    const monthTable = months[selectedMonth]; 
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
    <div className='calendarMainBox'>
      <h1  style={{ fontFamily: 'courier'}}>{months[selectedMonth].toUpperCase()} 2024</h1>
     
      <h3 style={{ fontFamily: 'courier'}}>choose a month</h3>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          className='calendarMonthSelect'  >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </option>
          ))}
        </select>
   

      {loading ? 
      <p>Loading events...</p> : 
      <div>{events.map((event) => (
      <div 
        key={event.id}
        className='calendarSubBox'>
       
       <p style={{ 
        borderRight: '1px black solid', 
        borderBottom: '1px black solid',
        borderRadius: 3,
        paddingRight: '1%', 
        width: '9vh'}}>
            {event.id}  {event.day}</p>
       <p style={{ marginLeft: '1%'}}> 
            {event.event}
       </p>
       <NavLink to='https://www.google.maps.com'>tag</NavLink>
   
        </div>))}
    
      </div>
        }

    </div>
  );
};

export default Calendar;

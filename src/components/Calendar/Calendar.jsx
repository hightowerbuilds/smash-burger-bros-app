import { useState } from 'react'
import './Calendar.css'

export default function Calendar() {


const [ firstDay, setFirstDay ] = useState('');
const [ monthLength, setMonthLength ] = useState(0);
const [selectedMonth, setSelectedMonth] = useState('');
const [ refresh, setRefresh] = useState(true)


const months = [
    '2024-01', 
    '2024-02', 
    '2024-03', 
    '2024-04', 
    '2024-05', 
    '2024-06', 
    '2024-07', 
    '2024-08', 
    '2024-09', 
    '2024-10', 
    '2024-11', 
    '2024-12'
];

const monthsFirstDay = {
    "2024-01": 'monday',
    '2024-02': 'thursday',
    '2024-03': 'friday',
    '2024-04': 'monday',
    '2024-05': 'wednesday',
    '2024-06': 'saturday',
    '2024-07': 'monday',
    '2024-08': 'thursday',
    '2024-09': 'sunday',
    '2024-10': 'tuesday',
    '2024-11': 'friday',
    '2024-12': 'sunday',
}

const monthDays = {
    "2024-01": 31,
    '2024-02': 29, 
    '2024-03': 31,
    '2024-04': 30,
    '2024-05': 31,
    '2024-06': 30,
    '2024-07': 31,
    '2024-08': 31,
    '2024-09': 30,
    '2024-10': 31,
    '2024-11': 30,
    '2024-12': 31
  };

  const days = [
    ["sunday", 1], 
    ["monday", 2], 
    ["tuesday", 3], 
    ["wednesday", 4], 
    ["thursday", 5], 
    ["friday", 6], 
    ["saturday", 7], 
    ["sunday", 8], 
    ["monday", 9], 
    ["tuesday", 10], 
    ["wednesday", 11], 
    ["thursday", 12], 
    ["friday", 13], 
    ["saturday", 14], 
    ["sunday", 15], 
    ["monday", 16], 
    ["tuesday", 17], 
    ["wednesday", 18], 
    ["thursday", 19], 
    ["friday", 20], 
    ["saturday", 21], 
    ["sunday", 22], 
    ["monday", 23], 
    ["tuesday", 24], 
    ["wednesday", 25], 
    ["thursday", 26], 
    ["friday", 27], 
    ["saturday", 28], 
    ["sunday", 29], 
    ["monday", 30], 
    ["tuesday", 31],
    ["wednesday", 32],
    ["thursday", 33],
    ["friday", 34],
    ["saturday", 35],
    ["sunday", 36],
    ["monday", 37]
];

const newDays = {
    sunday: days.map(dayData => [dayData[0], dayData[1]]),
    monday: days.map(dayData => [dayData[0], dayData[1] - 1] ),
    tuesday: days.map(dayData => [dayData[0], dayData[1] - 2] ),
    wednesday: days.map(dayData => [dayData[0], dayData[1] - 3] ),
    thursday: days.map(dayData => [dayData[0], dayData[1] - 4] ),
    friday: days.map(dayData => [dayData[0], dayData[1] - 5] ),
    saturday: days.map(dayData => [dayData[0], dayData[1] - 6] ),
}

const nameSwitch = (selectedMonth) => {

    if (selectedMonth === '2024-01') {
        return 'January'
    } else if (selectedMonth === '2024-02') {
        return 'February'
    } else if (selectedMonth === '2024-03') {
        return 'March'
    } else if (selectedMonth === '2024-04') {
        return 'April'
    } else if (selectedMonth === '2024-05') {
        return 'May'
    } else if (selectedMonth === '2024-06') {
        return 'June'
    } else if (selectedMonth === '2024-07') {
        return 'July'
    } else if (selectedMonth === '2024-08') {
        return 'August'
    } else if (selectedMonth === '2024-09') {
        return 'September'
    } else if (selectedMonth === '2024-10') {
        return 'October'
    } else if (selectedMonth === '2024-11') {
        return 'November'
    } else if (selectedMonth === '2024-12'){
        return 'December'
    } else {
        return 'Pick a Month'
    }
}



const week = (monthLength, first ) => { 
        if (!first) {
          return(
             newDays['sunday'].map((day) => (
                day[1] < 1 || day[1] > monthLength ? 
                <div className='calendarDayBox' key={day[1]}>{day[0]} {'X'}</div> : 
                <div className='calendarDayBox' key={day.keys}>{day[0]} {day[1]}</div>
               ))
            )
        } else {
           return( newDays[first].map((day) => (
                day[1] < 1 || day[1] > monthLength ? 
              '' : 
                <div className='calendarDayBox' key={day.keys}>
                    {day[0]} {day[1]} 
               
                </div>
               )))
        }
  }

const refreshButton = () => {
      window.location.reload();
    };

const handleInputChange = (event) => {
    setRefresh(false)
    setSelectedMonth(event.target.value);
    setMonthLength(monthDays[event.target.value])
    setFirstDay(monthsFirstDay[event.target.value])
  };

  return (
    <div className="calendarMainBox">
        <h3 style={{ padding: '1%', fontFamily: 'courier'}}>Smash Burger Bros Calendar</h3>
    <p className='calendarHeading'>{nameSwitch(selectedMonth)} 2024</p>
    {
    refresh ? 
    <div>
      <input
        type='month'
        list='months'  
        value={selectedMonth}
        onChange={handleInputChange}
        placeholder="Select a month"
      />
      <datalist id="months">
        {months.map((month) => (
          <option key={month} value={month} />
        ))}
      </datalist>
    </div> :  
    <button onClick={refreshButton}>
       CHOOSE A NEW MONTH
    </button>
    }
    
    <div className='calendarSubBox'>
        {week(monthLength, firstDay)}      
    </div>

    </div>
  )
}



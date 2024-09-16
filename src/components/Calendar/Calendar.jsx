
import { useState, useEffect } from 'react'
import { supabase } from '../../services/supabase'
import './Calendar.css'

export default function Calendar() {


    const [data, setData] = useState([]);
    const [activeTable, setActiveTable] = useState('september');


    const fetchData = async () => {
        const { data } = await supabase
          .from(activeTable) 
          .select('*')
          .order('id', { ascending: true });
          
          setData(data);
        
      }

      useEffect(() => {
        fetchData();
      }, [activeTable]);

      const handleTableChange = (newTable) => {
        setActiveTable(newTable)
      
      };


      

  return (
    <div className="calendarMainBox">
     
        <h3 style={{ padding: '1%', fontFamily: 'courier'}}>Smash Burger Bros Calendar</h3>
    <p className='calendarHeading'>month 2024</p>
    <div style={{ display: 'inline-flex'}}>
    <button onClick={() => {handleTableChange('january')}}>january</button>
    <button onClick={() => {handleTableChange('february')}}>february</button>
    <button onClick={() => {handleTableChange('march')}}>march</button>
    <button onClick={() => {handleTableChange('april')}}>april</button>
    <button onClick={() => {handleTableChange('may')}}>may</button>
    <button onClick={() => {handleTableChange('june')}}>june</button>
    <button onClick={() => {handleTableChange('july')}}>july</button>
    <button onClick={() => {handleTableChange('august')}}>august</button>
    <button onClick={() => {handleTableChange('september')}}>september</button>
    <button onClick={() => {handleTableChange('october')}}>october</button>
    <button onClick={() => {handleTableChange('november')}}>november</button>
    <button onClick={() => {handleTableChange('december')}}>december</button>
    </div>
    <div className='calendarSubBox'>

    
    </div>

    </div>
  )
}



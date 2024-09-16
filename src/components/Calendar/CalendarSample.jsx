
import { useState, useEffect } from 'react'
import { supabase } from '../../services/supabase'
import './Calendar.css'

export default function Calendar() {

    const [jan, setJan] = useState([]);
    const [feb, setFeb] = useState([]);
    const [mar, setMar] = useState();
    const [apr, setApr] = useState();
    const [may, setMay] = useState();
    const [jun, setJun] = useState();
    const [jul, setJul] = useState();
    const [aug, setAug] = useState();
    const [sep, setSep] = useState();
    const [oct, setOct] = useState();
    const [nov, setNov] = useState();
    const [dec, setDec] = useState();

    const fetchJan = async () => { const { data } = await supabase.from('january').select('*').order('id', { ascending: true });
          setJan(data);
        }

    const fetchFeb = async () => { const { data } = await supabase.from('february').select('*').order('id', { ascending: true });
      setFeb(data);
        }

    const fetchMar = async () => { const { data } = await supabase.from('march').select('*').order('id', { ascending: true })
        setMar(data)
}


      useEffect(() => {
        fetchJan();
        fetchFeb();
        fetchMar();
      }, []);

      const handleTableChange = () => {
     
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

    <div className='calendarSubBox'></div>
       
    </div>
  )
}



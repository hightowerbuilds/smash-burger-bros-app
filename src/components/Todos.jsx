
import { useState, useEffect } from 'react'
import { supabase } from '../services/supabase'

export default function Todos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('september').select('*').order('id', { ascending: true });

      if (todos.length >= 1) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
        {todo.id} {todo.day}   {todo.event}
            
        </li>
      ))}
    </div>
  )
}

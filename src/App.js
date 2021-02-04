import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'




function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'this is a sports so enjoy the day',
        day: 'Feb 8th at 2.30pm',
        reminder: false
    },
    {
        id:2,
        text:'this is a university so enjoy the day',
        day: 'Feb 6th at 2.30pm',
        reminder: true
    },
    {
        id:3,
        text:'this is a holiday so enjoy the day',
        day: 'Feb 5th at 2.30pm',
        reminder: false
    }
  ])
  // Add Tasks

  const addTask = task => {
    const id = Math.floor(Math.random()* 100000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Deleting Task

const deleteTask = id => {
  setTasks(tasks.filter(task => task.id !== id))
}

// Toggle Reminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map( (task) => task.id === id ? {...task, reminder: !task.reminder } : task)
  )
}

  return (
    <div className="container">
     <Header />
     <AddTask onAdd={addTask} />
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/> : 'yup !!! you have completed your all tasks'}
    </div>
  );
}

export default App;

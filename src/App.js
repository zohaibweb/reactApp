
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'



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
  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

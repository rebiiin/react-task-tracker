import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './index.css';
import { useState } from 'react';
const App = () => {

  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([

    
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {react-task-tracker
        "id": 3,
        "text": "Meeting at Office",
        "day": "Feb 7th at 5:30pm",
        "reminder": true
      }
  ])

  //Add Task
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000 +1);


    const newTask = {id, ...task}

    setTasks([...tasks, newTask])

  }


  //Delete task

  const deleteTask = (id) => {
   setTasks(tasks.filter((task)=> task.id !== id))
  }


  //Toggel Reminder

  const toggleReminder = (id) => {
   setTasks(
   tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
   }

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      {/* show task only add btn */}
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggel={toggleReminder} />
      ) : ('No Tasks To Show') }
    </div>
  );
}




export default App;

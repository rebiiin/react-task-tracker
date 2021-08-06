import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './index.css';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About';

const App = () => {

  const [showAddTask,setShowAddTask] = useState(false)


  //before jsosn poluted here then moved to db.josn file
  const [tasks, setTasks] = useState([])



 //load 

  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetechTasks()
      setTasks(tasksFromServer)
    }

 
    getTasks();

  },[]);

 //fetech tasks main
 const fetechTasks = async () => {
    
  const res = await fetch(`http://localhost:8000/tasks/`);
  const data = await res.json();
  //console.log(data);
  return data;
}

 //fetech task
 const fetchTask = async (id) => {
    
  const res = await fetch(`http://localhost:8000/tasks/${id}`);
  const data = await res.json();
  //console.log(data);
  return data;
}


  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:8000/tasks',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])




    // const id = Math.floor(Math.random() * 10000 +1);


    // const newTask = {id, ...task}

    // setTasks([...tasks, newTask])

  }


  








  //Delete task

  const deleteTask = async (id) => {

    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'delete'
    })

   setTasks(tasks.filter((task)=> task.id !== id))
  }


  //Toggel Reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:8000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()


   setTasks(
     tasks.map((task) => task.id === id ? {...task, reminder:
     data.reminder } : task))
   }

   return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle ={toggleReminder}
              />
              ) : (
                'No Tasks To Show'
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}




export default App;

import React from 'react'

const tasks = [
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
    {
        "id": 3,
        "text": "Meeting at Office",
        "day": "Feb 7th at 5:30pm",
        "reminder": true
      }
  ]



const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks

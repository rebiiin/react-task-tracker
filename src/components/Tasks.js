import React from 'react';
import Task from './Task';


const Tasks = ({ tasks, onDelete, onToggel }) => {

    return (
        <>
            {tasks.map((task) => (

            <Task key={task.id} task={task} onDelete={onDelete} onToggel={onToggel} />


            ))}
        </>
    )
}

export default Tasks

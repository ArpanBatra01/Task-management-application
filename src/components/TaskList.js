import React, { useState } from 'react'

const TaskList = ({ tasks }) => {

    return (

        <div>
            <ul>
                {tasks.map((task) => (
                    <TaskList key={task.id} task={task} />
                ))}
            </ul>
        </div>
    )
}

export default TaskList
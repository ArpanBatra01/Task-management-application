import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../redux/tasks/taskSlice';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();



    return (
        <div>
            <input
                type="checkbox"
                checked={task}
                onChange={() => dispatch(toggleTask(task.id))}
            />

            <button onClick={() => dispatch(removeTask(task))} style={{ marginLeft: '10px' }}>
                Remove
            </button>


        </div>
    )
}

export default TaskItem

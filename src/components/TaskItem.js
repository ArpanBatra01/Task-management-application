import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleCompletion } from '../redux/features/tasksSlice';
import dayjs from 'dayjs';


const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleCompletion(task));

    };

    const handleRemoveTask = () => {
        dispatch(removeTask(task));

    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>

            <input
                type="checkbox"
                // checked={task}
                onChange={handleChange}
                style={{ marginRight: '10px' }}
            />

            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name} - {task.description} (Due: {task.dueDate.format('YYYY-MM-DD')})

            </span>

            <button

                onClick={handleRemoveTask}
                style={{ marginLeft: '10px', backgroundColor: '#ff4d4f', color: 'white', border: 'none', padding: '5px 10px' }}
            >
                Remove
            </button>
        </div>
    );
};

export default TaskItem;

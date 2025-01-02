import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, toggleCompletion, setFilter } from '../redux/features/tasksSlice';
import TaskItem from './TaskItem';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, filter } = useSelector(state => state.tasks);


    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        return filter === 'Active' ? !task.completed : task.completed;
    });

    return (
        <div>
            <button onClick={() => dispatch(setFilter('All'))}>All</button>
            <button onClick={() => dispatch(setFilter('Active'))}>Active</button>
            <button onClick={() => dispatch(setFilter('Completed'))}>Completed</button>

            {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}


        </div>
    )
}

export default TaskList

import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/tasks/taskSlice';

const TaskFilters = () => {
    
  const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() => dispatch(setFilter('All'))}>All</button>
        <button onClick={() => dispatch(setFilter('Active'))}>Active</button>
        <button onClick={() =>dispatch(setFilter('Completed'))}>Completed</button>
      
    </div>
  )
}

export default TaskFilters


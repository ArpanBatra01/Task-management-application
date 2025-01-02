import React from 'react'
import { useDispatch } from 'react-redux'
import {setFilter} from '../redux/features/tasksSlice';

const TaskFilters = () => {

  const dispatch = useDispatch();


  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));

  }

  return (
    <div>
      <button onClick={() => handleFilterChange('All')}>All</button>
      <button onClick={() => handleFilterChange('Active')}>Active</button>
      <button onClick={() => handleFilterChange('Completed')}>Completed</button>

    </div>
  )
}

export default TaskFilters


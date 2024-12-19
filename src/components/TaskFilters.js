import React from 'react'

const TaskFilters = ({onchange}) => {
  return (
    <div>
        <button onClick={() => onchange('All')}>All</button>
        <button onClick={() => onchange('Active')}>Active</button>
        <button onClick={() =>onchange('Completed')}>Completed</button>
      
    </div>
  )
}

export default TaskFilters


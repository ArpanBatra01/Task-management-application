import React from 'react'
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import TaskFilters from '../components/TaskFilters';

const TaskManagement = () => {
    return (
        <div className="App">
            <h1>Task Management Application</h1>
            <TaskForm />
            <TaskItem />
            <TaskFilters />


            {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />'h
    
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}
        </div>
    );
}

export default TaskManagement

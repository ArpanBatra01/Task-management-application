import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    filter: 'All',

};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },

        removeTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        },


        toggleCompletion(state, action) {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
            }
        },

        editTask(state, action) {
            const { id, updates } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.name = updates.name;
                task.description = updates.description;
                task.dueDate = updates.dueDate;
            }
        },


        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { addTask, removeTask, toggleCompletion, editTask, setFilter } = tasksSlice.actions;


export default tasksSlice.reducer;
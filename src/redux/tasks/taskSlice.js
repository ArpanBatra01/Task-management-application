import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
    filter: 'ALL',
};


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        Task: (state, action) => {
            state.tasks.push(action.payload);
        },

        toggleTask: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },


        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);

        },

        editTask: (state, action) => {
            const { id, name, description, dueDate } = action.payload;
            const task = state.tasks.find((task) => task.id === id);

            if (task) {
                task.name = name;
                task.description = description;
                task.dueDate = dueDate;
            }
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },

});

export const { addTask, toggleTask, removeTask, editTask, setFilter } = taskSlice.actions;

export default taskSlice.reducer;

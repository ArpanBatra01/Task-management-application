import React, { useState } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { addTask, setFilter } from '../../redux/features/tasksSlice';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

const TaskForm = () => {
    const [task, setTask] = useState({ name: '', description: '', dueDate: '' });
    // const [dueDate, setDueDate] = useState(dayjs());

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        if (values.name && values.dueDate) {
            dispatch(addTask({ ...values, id: Date.now(), completed: true }));
            setTask({ name: '', description: '', dueDate: '' });
        }

        // const dueDateString = dueDate.toISOString();

        // dispatch(setFilter({dueDate:dueDateString}));
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', paddingTop: 50 }}>
            <Form
                name="task-form"
                onFinish={handleSubmit}
                initialValues={task}
                layout="vertical"
            >
                <Form.Item
                    label="Enter new task"
                    name="name"
                    rules={[{ required: true, message: 'Please input your task name!' }]}
                >
                    <Input
                        placeholder="Task Name"
                        onChange={(e) => setTask({ ...task, name: e.target.value })}
                    />
                </Form.Item>

                <Form.Item
                    label="Enter Task Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input
                        placeholder="Task Description"
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                    />
                </Form.Item>

                <Form.Item
                    label="Due Date"
                    name="dueDate"
                    rules={[{ required: true, message: 'Please select a date!' }]}
                >
                    <DatePicker
                        // value={dueDate.format('YYYY-MM-DD')}
                        onChange={(date, dateString) => setTask({ ...task, dueDate: dateString })}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add Task
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default TaskForm;
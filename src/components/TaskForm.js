import React, { useState } from 'react'
import { Form, Input, Button, DatePicker } from 'antd';
import { addTask } from '../redux/tasks/taskSlice';
import { useDispatch } from 'react-redux';


const TaskForm = () => {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch('');


    // const handleChange = (values) => {
    //     console.log('Form Values: ', values);
    // }

    const handleSubmit = (e) => {

        e.prevantDefault();
        if (taskName && dueDate) {
            dispatch(addTask({ id: Date.now(), taskName, description, dueDate, completed: false }));
            setTaskName('');
            setDescription('');
            setDueDate('');

        }

    };

    return (

        <div style={{ maxWidth: 400, margin: '0 auto', paddingTop: 50 }}>

            <div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    value={taskName}


                    layout="vertical"
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        label="Enter new task"
                        name="Enter new task"
                        onChange={(e) => setTaskName(e.target.value)}
                        value={description}

                        rules={[{ required: true, message: 'Please input your task name!' }]}

                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Enter Task Description"
                        name="Enter Task Description"
                        value={dueDate}
                        onChange={(e) => setDescription(e.target.value)}

                        rules={[{ required: true, message: 'Please input your description!' }]}

                    >
                        <Input />
                    </Form.Item>

                    {/* Date Picker Field */}
                    <Form.Item
                        label="Date"
                        name="date"
                        onChange={(e) => setDueDate(e.target.value)}

                        rules={[{ required: true, message: 'Please select a date!' }]}
                    >
                        <DatePicker />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button type="primary"  >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>


    )
}

export default TaskForm
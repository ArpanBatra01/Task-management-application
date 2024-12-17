import React, { useState } from 'react'
import { Form, Input, Button, DatePicker } from 'antd';


const TaskForm = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleChange = (values) => {
        console.log('Form Values: ', values);
    }


    return (

        <div style={{ maxWidth: 400, margin: '0 auto', paddingTop: 50 }}>

            <div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}

                    layout="vertical"
                >
                    <Form.Item
                        label="Enter new task"
                        name="Enter new task"
                        onChange={handleChange}

                        rules={[{ required: true, message: 'Please input your task name!' }]}

                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Enter Task Description"
                        name="Enter Task Description"
                        onChange={handleChange}

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
                        <Button type="primary" htmlType="submit"    >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>


    )
}

export default TaskForm
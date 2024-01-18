import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigation = useNavigate();
    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const onFinish = (values) => {
        const date = new Date()
        console.log('Success:', values, date.getTime());
        navigation(`/${JSON.stringify(date.getTime())}${values.username.slice(0,4)}${JSON.stringify(parseInt(Math.random() * date.getTime()))}`)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  return (
    <section>
        <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
                { min: 5, message: 'Username must be minimum 5 characters.' },
                { max: 20, message: `Username can be maximum 20 characters` }
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
                { validator: async (_, password) => {
                    if (!passwordRegex.test(password)) {
                      return Promise.reject(new Error("Password can be maximum 8 characters and must contain atleast 1 upper case, one lower case, one number and one special character"));
                    }
                  },
                }
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
    </section>
  )
}

export default LoginPage
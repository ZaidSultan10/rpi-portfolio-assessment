import React, { useEffect } from 'react'
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from '../hooks/useWindowWidth';

const LoginPage = () => {
    const navigation = useNavigate();
    const innerWidth = useWindowWidth()
    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const onFinish = (values) => {
        const date = new Date()
        console.log('Success:', values, date.getTime());
        localStorage.setItem("userData", JSON.stringify({userData : {
            username : values.username,
            password : `Its a Secret ##!!@@##$$%%%%^^&&**`,
            originalPasswordProtected : JSON.stringify(date.getTime()) + values.password.split('').sort(function(){
                return Math.random() - 0.5;
            }).join('') + JSON.stringify(parseInt(Math.random() * date.getTime())),
            navigation : `/${JSON.stringify(date.getTime())}${values.username.slice(0,4)}${JSON.stringify(parseInt(Math.random() * date.getTime()))}`
        }}));
        navigation(`/${JSON.stringify(date.getTime())}${values.username.slice(0,4)}${JSON.stringify(parseInt(Math.random() * date.getTime()))}`)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        if(localStorage.getItem('userData')){
            localStorage.removeItem("userData");
        }
    },[])
  return (
    <section style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Card title="Login" size="large">
            <Form
                name="basic"
                labelCol={{
                span: 10,
                }}
                wrapperCol={{
                span: 24,
                }}
                style={{
                maxWidth: 600,
                width: innerWidth < 670 ? '80vw' : 600
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout='vertical'
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
                // wrapperCol={{
                //     offset: 8,
                //     span: 16,
                // }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                // wrapperCol={{
                //     offset: 8,
                //     span: 16,
                // }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </section>
  )
}

export default LoginPage
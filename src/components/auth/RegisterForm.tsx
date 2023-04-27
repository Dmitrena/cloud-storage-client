import * as api from '@/api';
import { RegisterFormDto } from '@/api/dto/auth.dto';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { setCookie } from 'nookies';
import { FC } from 'react';
import styles from './Auth.module.scss';

const RegisterForm: FC = () => {
  const onSubmit = async (values: RegisterFormDto) => {
    try {
      const { access_token } = await api.auth.register(values);

      notification.success({
        message: 'Register successful',
        description: 'We provide you to admin-panel, just wait...',
        duration: 2,
      });

      setCookie(null, 'access_token', access_token, {
        path: '/',
      });
    } catch (err) {
      console.warn('LoginForm', err);
    }
  };
  return (
    <div className={styles.root}>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        autoComplete='off'
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label='Full Name'
          name='fullName'
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Form>{' '}
    </div>
  );
};

export default RegisterForm;

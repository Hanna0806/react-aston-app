import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SignIn.module.scss';
import { TNewUser } from '../../types/types';
import { addActiveUser, clearError, usersSelector } from '../../redux/slices/usersSlice';

const SignIn: React.FC = () => {
    const dispatch = useDispatch();
    const { error } = useSelector(usersSelector);

    const onFinish: FormProps<TNewUser>['onFinish'] = (values) => {
        dispatch(addActiveUser(values))
    };

    const onFinishFailed: FormProps<TNewUser>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        return () => {
            dispatch(clearError());
        }
    }, []);

    return (
        <div className={styles.signIn}>
            <h3 className={styles.title}>Авторизация</h3>
            <Form
                name="signIn"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<TNewUser>
                    label="Логин"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<TNewUser>
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>

                {error && <p className={styles.error}>{error}</p>}
            </Form>
        </div>
    )
};

export default SignIn;
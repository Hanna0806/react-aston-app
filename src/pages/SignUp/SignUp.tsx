import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import styles from './SignUp.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, clearError } from '../../redux/slices/usersSlice';
import { IRootState } from '../../redux/store';
import { TNewUser } from '../../types/types';

const onFinishFailed: FormProps<TNewUser>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const SignUp: React.FC = () => {
    const dispatch = useDispatch();
    const { error } = useSelector((state: IRootState) => state.users);

    const onFinish: FormProps<TNewUser>['onFinish'] = (values) => {
        dispatch(addUsers(values))
    };

    useEffect(() => {
        return () => {
            dispatch(clearError());
        }
    }, []);

    return <div className={styles.signUp}>
        <h3 className={styles.title}>Регистрация</h3>
        <Form
            name="signUp"
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
                    Зарегистрироваться
                </Button>
            </Form.Item>

            {error && <p className={styles.error}>{error}</p>}
        </Form>
    </div>
};

export default SignUp;
import { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Auth.module.scss';
import { TNewUser } from '../../types/types';
import { addActiveUser, addUsers, clearError, usersSelector } from '../../redux/slices/usersSlice';
import { AUTH_TYPES } from '../../constants/general';
import { REGEX } from '../../constants/regex';
import { RuleObject } from 'antd/es/form';
import { StoreValue } from 'antd/es/form/interface';

const Auth = ({ authType }: { authType: string }) => {
    const dispatch = useDispatch();
    const { error } = useSelector(usersSelector);

    const validatePassword = (_: RuleObject, value: StoreValue, callback: (error?: string) => void) => {
        const regex = new RegExp(REGEX.PASSWORD);
        
        if (value && !regex.test(value)) {
            callback("Password should consist at least one upper case English letter, at least one lower case English letter, at least one digit, at least one special character, minimum 8 in length");
        } else {
            callback();
        }
    };

    const onFinish: FormProps<TNewUser>['onFinish'] = (values) => {
        if (authType === AUTH_TYPES.SIGN_IN) {
            dispatch(addActiveUser(values));
        } else {
            dispatch(addUsers(values));
        }
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
        <div className={styles.auth}>
            <h3 className={styles.title}>{authType === AUTH_TYPES.SIGN_IN ? "Авторизация" : "Регистрация"}</h3>
            <Form
                name={authType === AUTH_TYPES.SIGN_IN ? "signIn" : "signUp"}
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 18 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<TNewUser>
                    label="Логин (email):"
                    name="username"
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        { type: 'email', message: 'The input is not valid E-mail!' }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<TNewUser>
                    label="Пароль"
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { validator: validatePassword }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        {authType === AUTH_TYPES.SIGN_IN ? "Войти" : "Зарегистрироваться"}
                    </Button>
                </Form.Item>

                {error && <p className={styles.error}>{error}</p>}
            </Form>
        </div>
    )
};

export default Auth;
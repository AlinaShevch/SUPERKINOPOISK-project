import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../redux/action_creators/user_action_creator';
import './registration.css';

const Registration = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const handleInputChange = (e: any, setter: Function) => {
        setter(e.target.value)
    }
    const onSignUp = () => {
        dispatch(signup({
            username: name,
            email,
            password
        }))
    }

    return (
        <div className="registration-form">
            <h2>Регистрация</h2>
            <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="login" className="registration-placeholder" placeholder="Введите логин" onChange={(e) => handleInputChange(e, setName)} value={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Почта</Form.Label>
                <Form.Control type="email" className="registration-placeholder" placeholder="Введите почту" onChange={(e) => handleInputChange(e, setEmail)} value={email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" className="registration-placeholder" placeholder="Введите пароль" onChange={(e) => handleInputChange(e, setPassword)} value={password} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Подтверждение пароля</Form.Label>
                <Form.Control type="password" className="registration-placeholder" placeholder="Подтверждение пароля" onChange={(e) => handleInputChange(e, setConfirmPassword)} value={confirmpassword} />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button variant="secondary" type="submit" className="registration-button" onClick={onSignUp}>
                Регистрация
            </Button>

            <Link to={`/signin`} className="header-link">
                <Form.Text className="text-muted no-account-text">
                    <span className="registration-text">У Вас уже есть аккаунт? Вход</span>
                </Form.Text>
            </Link>
        </div>
    )
}

export { Registration }
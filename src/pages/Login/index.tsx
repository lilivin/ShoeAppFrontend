import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Store } from 'redux';
import { addUser } from '../../store/actions/userActions';
import './style.scss';

export default function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = event.target.value;
        setFormData({
            ...formData,
            [event.target.name]: value
        })
    }

    const submitForm = () => {
        console.log(formData)
        fetch('http://localhost:3000/auth/login',{
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {"Content-Type": "application/json"}
          })
          .then(async response => {
            return response.json()
          })
          .then(data => {
            if(data.user){
              console.log(data.user)
              dispatch(addUser(data.user));
              navigate("/dashboard");
            } else {
              setError('Wrong login or password')
            }
          })
          .catch((err) => {
            setError(err.message);
          })
    }

  return (
    <div className='login-form'>
        <input 
          className='login-form__input' 
          onChange={handleChange} 
          type="email" 
          name="email" 
          placeholder='Email'
        />
        <input 
          className='login-form__input' 
          onChange={handleChange} 
          type="password" 
          name="password" 
          placeholder='Password'
        />
        {error && <span className='login-form__message'>{error}</span>}
        <button className='login-form__button' onClick={submitForm}>Login</button>
    </div>
  )
}

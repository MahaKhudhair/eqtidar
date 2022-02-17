import React from 'react';
import validate from '../Signup/validateInfo';
import useForm from '../Signup/useForm';
import './Form.css';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        سجل معنا! وقم بالبيع والشراء او الايجار من خلال موفعنا
        </h1>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='البريد الالكتروني'
            value={values.email}
            onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
        <input
            className='form-input'
            type='password'
            name='password'
            placeholder='كلمة السر'
            value={values.password}
            onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
        تسجيل دخول
        </button>
        <span className='form-input-login'>
        ليس لديك حساب ؟ انشئ حسابا <a href='/sign-up'>هنا</a>
        </span>
    </form>
    </div>
  );
};

export default FormLogin;

import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
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
            type='text'
            name='fullName'
            placeholder='الاسم الكامل'
            value={values.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='number'
            name='phone'
            placeholder='رقم الهاتف'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
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
        <div className='form-inputs'>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='تاكيد كلمة السر'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          تسجيل
        </button>
        <span className='form-input-login'>
          هل لديك حساب ؟ تسجيل دخول <a href='/login'>هنا</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;

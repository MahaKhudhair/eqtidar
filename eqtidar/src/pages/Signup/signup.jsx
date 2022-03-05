
import React, { useContext , useState } from "react";
import './Form.css';
import { useNavigate} from "react-router-dom";
import axios from "../../utils/axios";
import { TOKEN_KEY } from "../../utils/Constants";
import AuthContext from "../../contexts/authcontext";
import useAuth from '../../hooks/useAuth';
import validate from "./validate";
const FormSignup = () => {
  const navigate = useNavigate();
  const {isAuth} = useAuth()
  if(isAuth){
    navigate('/')
  }
  const [values, setValues] = useState({
    full_name: '',
    phone_number: '',
    email: '',
    password1: '',
    password2: ''
  });

  const [errors, setErrors] = useState({});
  const { signup } = useContext(AuthContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    if (Object.keys(errors).length === 0){
      signup(values.full_name , values.email , values.phone_number, values.password1 , values.password2);
      if (!isAuth){
        console.log('error in signup')
        setErrors(errors.password)
        console.log(errors)
        return errors
      }
      else{
        console.log(isAuth)
        return navigate('/')
      }
    }
    else{
      return errors
    }
  };
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
            name='full_name'
            placeholder='الاسم الاول'
            value={values.full_name}
            onChange={handleChange}
          />
          {errors.full_name && <p>{errors.full_name}</p>}
        </div>
        <div className='form-inputs'>
          <input
            className='form-input'
            type='number'
            name='phone_number'
            placeholder='رقم الهاتف'
            value={values.phone_number}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone_number}</p>}
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
            name='password1'
            placeholder='كلمة السر'
            value={values.password1}
            onChange={handleChange}
          />
          {errors.password1 && <p>{errors.password1}</p>}
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

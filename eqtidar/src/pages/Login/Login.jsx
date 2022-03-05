
import React, { useContext , useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "../../utils/axios";
import { TOKEN_KEY } from "../../utils/Constants";
import AuthContext from "../../contexts/authcontext";
import useAuth from '../../hooks/useAuth';
import validate from "./validate";
import './Form.css';
function FormLogin () {
  const navigate = useNavigate();
  const {isAuth} = useAuth()
  if(isAuth){
    navigate('/')
  }
    const [values, setValues] = useState({
      email: '',
      password: '',
    });
  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext);



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
      login(values.email , values.password);
      if (!isAuth){
        
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

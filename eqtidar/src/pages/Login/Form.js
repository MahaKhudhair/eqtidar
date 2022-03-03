import React, { useState } from 'react';
import './Form.css';
import FormLogin from './Login';
const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <><div className='signup-container'>
            <div className='form-container-login'>
        <div className='form-content-left-login'>
        </div>
          <FormLogin submitForm={submitForm} />
      </div>
    </div>
    </>
  );
};

export default Login;

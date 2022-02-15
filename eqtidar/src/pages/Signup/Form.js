import React, { useState } from 'react';
import './Form.css';
import FormSignup from './signup';
const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <><div className='signup-container'>
            <div className='form-container'>
        <div className='form-content-left'><img></img>
        </div>
          <FormSignup submitForm={submitForm} />
      </div>
    </div>

    </>
  );
};

export default Signup;

import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export const SignupForm = ({setIsLoggedIn}) => {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "",
    email: "", password: "",
    confirmPassword: ""
  })

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  function changeHandler(event) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))

  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate('/dashboard');

  }


  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstName and lastName */}
        <div>

          <label>
            <p>First Name<sup>*</sup></p>
            <input required type='text'
              placeholder='Enter First Name'
              name='firstName'
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>

          <label>
            <p>Last Name<sup>*</sup></p>
            <input required type='text'
              placeholder='Enter Last Name'
              name='lastName'
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>

        </div>

        {/* email */}
        <label>
          <p>Email Address <sup>*</sup></p>
          <input required type='email'
            placeholder='Enter Email Address'
            name='email'
            onChange={changeHandler}
            value={formData.email}
          />
        </label>

        {/* create password and confirm password */}

        <div>
          <label>
            <p>Create Password<sup>*</sup></p>
            <input required type={showPassword ? ("text") : ("password")}
              placeholder='Enter Password'
              name='password'
              onChange={changeHandler}
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>

          
          <label>
            <p>Confirm Password<sup>*</sup></p>
            <input required type={showPassword ? ("text") : ("password")}
              placeholder='Confirm the Password'
              name='confirmPassword'
              onChange={changeHandler}
              value={formData.confirmPassword}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>
        </div>

        <button>
          Create Account
        </button>


      </form>


    </div>
  )
}

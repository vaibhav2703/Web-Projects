import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "", lastName: "",
    email: "", password: "",
    confirmPassword: ""
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");


  function changeHandler(event) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))

  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate('/dashboard');

  }


  return (
    <div>
      <div className='flex bg-richblack-800 rounded-full
                     p-1 gap-x-1 my-6 max-w-max'>
        <button
          className={`${accountType === "student"
            ?
            "bg-richblack-900 text-richblack-5"
            :
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>


        <button
          className={`${accountType === "instructor"
            ?
            "bg-richblack-900 text-richblack-5"
            :
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}

          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}
      className='flex flex-col w-full gap-y-4 mt-6'>
        {/* firstName and lastName */}
        <div className='flex gap-x-4'>

          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className=' text-pink-200'>*</sup></p>
            <input required type='text'
              placeholder='Enter First Name'
              name='firstName'
              onChange={changeHandler}
              value={formData.firstName}
              className=' bg-richblack-800 rounded-[0.5rem]
                     text-richblack-5 w-full p-[12px] border-richblack-5 border-b border-opacity-30'

            />
          </label>

          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className=' text-pink-200'>*</sup></p>
            <input required type='text'
              placeholder='Enter Last Name'
              name='lastName'
              onChange={changeHandler}
              value={formData.lastName}
              className=' bg-richblack-800 rounded-[0.5rem]
                     text-richblack-5 w-full p-[12px] border-richblack-5 border-b border-opacity-30'

            />
          </label>

        </div>

        {/* email */}
        <div >
          <label >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className=' text-pink-200'>*</sup></p>
            <input required type='email'
              placeholder='Enter Email Address'
              name='email'
              onChange={changeHandler}
              value={formData.email}
              className=' bg-richblack-800 rounded-[0.5rem]
                     text-richblack-5 w-full p-[12px] border-richblack-5 border-b border-opacity-30'

            />
          </label>
        </div>


        {/* create password and confirm password */}

        <div className='flex gap-x-4 '>
          <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className=' text-pink-200'>*</sup></p>
            <input required type={showPassword ? ("text") : ("password")}
              placeholder='Enter Password'
              name='password'
              onChange={changeHandler}
              value={formData.password}
              className=' bg-richblack-800 rounded-[0.5rem]
                     text-richblack-5 w-full p-[12px] border-richblack-5 border-b border-opacity-30'

            />
            <span
              className='absolute right-3 top-[38px] 
                    cursor-pointer'
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ?
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>
          </label>


          <label className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className=' text-pink-200'>*</sup></p>
            <input required type={showConfirmPassword ? ("text") : ("password")}
              placeholder='Confirm the Password'
              name='confirmPassword'
              onChange={changeHandler}
              value={formData.confirmPassword}
              className=' bg-richblack-800 rounded-[0.5rem]
                     text-richblack-5 w-full p-[12px] border-richblack-5 border-b border-opacity-30'

            />
            <span
              className='absolute right-3 top-[38px] 
                    cursor-pointer'
              onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ?
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>
          </label>
        </div>

        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 mx-auto'>
          Create Account
        </button>


      </form>


    </div>
  )
}

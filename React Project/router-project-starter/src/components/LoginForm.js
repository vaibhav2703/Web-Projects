import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPass, setShowPass] = useState(false);

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
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address<sup>*</sup></p>

                <input required type='email'
                    placeholder='Enter email id'
                    value={formData.email}
                    onChange={changeHandler}
                    name='email'
                />
            </label>

            <label>
                <p>Password<sup>*</sup></p>

                <input required type={showPass ? ("text") : ("password")}
                    placeholder='Enter Password'
                    value={formData.password}
                    onChange={changeHandler}
                    name='password'
                />

                <span onClick={() => setShowPass((prev) => !prev)}>
                    {showPass ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>

                <Link to="#">
                    <p>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button>Sign In</button>


        </form>
    )
}
 
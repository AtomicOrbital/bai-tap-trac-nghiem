import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { dangKyAction } from '../../Redux/Action/DangKyAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUpForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log("valuesSignup", values);
      try {
        await dispatch(dangKyAction(values));
        toast.success('Account created successfully');
        // formik.resetForm();
      } catch (error) {
        toast.error('Error creating account: ' + error.message);
      }
    }
  });

  return (
    <div className="form-container sign-up-container">
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          {/* ... */}
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="userName"
          onChange={formik.handleChange}
          placeholder="Name"
        />
        {/* <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          placeholder="Email"
        /> */}
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;

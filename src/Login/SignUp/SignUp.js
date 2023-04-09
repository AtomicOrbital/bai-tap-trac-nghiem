import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../Redux/Action/DangKyAction";
import { BaiTapTracNghiemService } from "../../Redux/Services/BaiTapTracNghiemService";
function SignUpForm() {
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // });
  // const handleChange = evt => {
  //   const value = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value
  //   });
  // };

  // const handleOnSubmit = evt => {
  //   evt.preventDefault();

  //   const { name, email, password } = state;
  //   alert(
  //     `You are sign up with name: ${name} email: ${email} and password: ${password}`
  //   );

  //   for (const key in state) {
  //     setState({
  //       ...state,
  //       [key]: ""
  //     });
  //   }
  // };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log("valuesSignup", values);
      const action = dangKyAction(values);
      dispatch(action);
      
      // formik.resetForm();    
    }
  })
  return (
    <div onSubmit={formik.handleSubmit} className="form-container sign-up-container">
      <form >
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="userName"
          // value={state.name}
          onChange={formik.handleChange}
          placeholder="Name"
        />
        {/* <input
          type="email"
          name="email"
          // value={state.email}
          onChange={formik.handleChange}
          placeholder="Email"
        /> */}
        <input
          type="password"
          name="password"
          // value={state.password}
          onChange={formik.handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;

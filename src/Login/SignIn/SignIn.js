import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../Redux/Action/DangNhapAction";
function SignInForm() {
  // const [state, setState] = useState({
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

  //   const { email, password } = state;
  //   alert(`You are login with email: ${email} and password: ${password}`);

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
      username: '',
      password: ''
    },

    onSubmit: (values) => {
      console.log("values", values);
      const action = dangNhapAction(values);
      dispatch(action);
    }
  })

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={formik.handleSubmit}>
        <h1>Sign in</h1>
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
        <span>or use your account</span>
        <input
          type="username"
          placeholder="username"
          name="username"
          // value={state.email}
          onChange={formik.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          // value={state.password}
          onChange={formik.handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;

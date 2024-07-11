import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!result.ok) {
        console.log(result.message);
      }
      console.log("Login sucessfully done");
      // console.log(result.data);
      dispatch({
        type: "LOGIN-SUCCESS",
        user: result.data,
        token: result.token,
        role: result.role,
      });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN-FAILURE", payload: error.message });
      console.log(error);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleClick}>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-primary w-100">Login</button>
                <p className="text-center mt-3">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

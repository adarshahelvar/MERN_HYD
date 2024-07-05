import React, { useState } from "react";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: undefined,
    email: undefined,
    phone: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = fetch(`${BASE_URL}/auth/registeruser`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = (await res).json();
      console.log(result)
      if (result.success === false) {
        console.log(result);
      }
      console.log("User created ")
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {console.log("credentials", credentials)}
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" onChange={handleChange} />
        <input type="text" id="email" onChange={handleChange} />
        <input type="text" id="phone" onChange={handleChange} />
        <input type="password" id="password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

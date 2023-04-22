import React, { Component, useState } from "react";
import axios from "axios";
import "./login.css";
export default function Register() {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  async function registerUser(event) {
    console.log("Register user called");
    event.preventDefault();
    try {
      const url = "http://localhost:9999/api/register";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/login";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  }
  return (
    <div>
      <div className="title" style={{fontFamily:"Verdana",color:"#cd873c"}}>Welcome to RHYTHM!</div>
      <div className="subtitle boi">Let's create a new account</div>
      <form id="reg-form" onSubmit={registerUser}>
        <input
          type="text"
          autoComplete="off"
          id="username"
          name="username"
          placeholder="Username"
          required
          className="input1"
          onChange={handleChange}
          value={data.username}
        />
        <input
          type="password"
          name="password"
          className="input2"
          style={{ display: "flex" }}
          autoComplete="off"
          id="password"
          placeholder="Password"
          required
          onChange={handleChange}
          value={data.password}
        />
        {/* <button
                                   className="bn54 hue"
                                   type="submit"
                                   value="Submit Form"
					
                            >
                                   <span className="bn54span">Submit</span> */}
        <input type="submit" value="Submit Form" />
        {/* </button> */}
        {error && <div>{error}</div>}
      </form>
      <script></script>
    </div>
  );
}

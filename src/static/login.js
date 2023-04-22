import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  async function Login(event) {
    console.log("Login called");
    event.preventDefault();
    try {
      const url = "http://localhost:9999/api/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      if (res.status === "ok") {
        alert("SIGNED IN SUCCESSFULLY");
        window.location = "/";
      } else {
        alert({ message: "Sign in failed" });
      }
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
      <div className="subtitle boi">Login to your account</div>

      <form id="login" onSubmit={Login}>
        <input
          type="text"
          autoComplete="off"
          id="username"
          placeholder="Username"
          required
          className="input1"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="password"
          autoComplete="off"
          id="password"
          placeholder="Password"
          required
          className="input2"
          style={{ display: "flex" }}
          name="password"
          value={data.password}
          onChange={handleChange}
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
      <br />
      <div className="text-light">Don't have an account?</div>
      <Link to="/register">
        <button className="bn54 hue">
          <span className="bn54span">Sign Up</span>
        </button>
      </Link>
    </div>
  );
}

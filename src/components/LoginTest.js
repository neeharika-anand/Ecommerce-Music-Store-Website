import React, { useState } from "react";

// import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
// import Button from "react-bootstrap/Button";

import "./style.css";

async function loginUser(credentials) {
       return fetch("http://localhost:8080/login", {
              method: "POST",

              headers: {
                     "Content-Type": "application/json",
              },

              body: JSON.stringify(credentials),
       }).then((data) => data.json());
}

export default function Login({token}) {
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");

       function validateForm() {
              return email.length > 0 && password.length > 0;
       }

       async function handleSubmit(e) {
              e.preventDefault();
              const token = await loginUser({
                     email,
                     password,
              });
                     
       }


       return (
              // <div className="Login">
              //        <Form onSubmit={handleSubmit}>
              //               <Form.Group size="lg" controlId="email">
              //                      <Form.Label>Email</Form.Label>

              //                      <Form.Control
              //                             autoFocus
              //                             type="email"
              //                             value={email}
              //                             onChange={(e) =>
              //                                    setEmail(e.target.value)
              //                             }
              //                      />
              //               </Form.Group>

              //               <Form.Group size="lg" controlId="password">
              //                      <Form.Label>Password</Form.Label>

              //                      <Form.Control
              //                             type="password"
              //                             value={password}
              //                             onChange={(e) =>
              //                                    setPassword(e.target.value)
              //                             }
              //                      />
              //               </Form.Group>

              //               <Button
              //                      block
              //                      size="lg"
              //                      type="submit"
              //                      disabled={!validateForm()}
              //               >
              //                      Login
              //               </Button>
              //        </Form>
              // </div>
              // <div class="container">
              //        <div class="body d-md-flex align-items-center justify-content-between">
              //               <div class="box-1 mt-md-0 mt-5">
              //                      <img
              //                             src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              //                             class=""
              //                             alt=""
              //                      />
              //               </div>
              //               <div class=" box-2 d-flex flex-column h-100">
              //                      <div class="mt-5">
              //                             <p class="mb-1 h-1">
              //                                    Create Account.
              //                             </p>
              //                             <p class="text-light mb-2">
              //                                    Share your thoughts with the
              //                                    world form today.
              //                             </p>
              //                             <div class="d-flex flex-column ">
              //                                    <p class="text-light mb-2">
              //                                           Continue with...
              //                                    </p>
              //                                    <div class="d-flex align-items-center">
              //                                           <a
              //                                                  href="#"
              //                                                  class="box me-2 selectio"
              //                                           >
              //                                                  <span class="fab fa-facebook-f mb-2"></span>
              //                                                  <p class="mb-0">
              //                                                         Facebook
              //                                                  </p>
              //                                           </a>
              //                                           <a
              //                                                  href="#"
              //                                                  class="box me-2"
              //                                           >
              //                                                  <span class="fab fa-google mb-2"></span>
              //                                                  <p class="mb-0">
              //                                                         Google
              //                                                  </p>
              //                                           </a>
              //                                           <a href="#" class="box">
              //                                                  <span class="far fa-envelope mb-2"></span>
              //                                                  <p class="mb-0">
              //                                                         Email
              //                                                  </p>
              //                                           </a>
              //                                    </div>
              //                                    <div class="mt-3">
              //                                           <p class="mb-0 text-light">
              //                                                  Already have an
              //                                                  account?
              //                                           </p>
              //                                           <div class="btn btn-primary">
              //                                                  Log in
              //                                                  <span class="fas fa-chevron-right ms-1"></span>
              //                                           </div>
              //                                    </div>
              //                             </div>
              //                      </div>
              //                      {/* <div class="mt-auto">
              //                             <p class="footer text-light mb-0 mt-md-0 mt-4">
              //                                    By register you agree with our
              //                                    <span class="p-color me-1">
              //                                           terms and conditions
              //                                    </span>
              //                                    and
              //                                    <span class="p-color ms-1">
              //                                           privacy policy
              //                                    </span>
              //                             </p>
              //                      </div> */}
              //               </div>
              //               <span class="fas fa-times"></span>
              //        </div>
              // </div>
              <div className="Login">
                     <section class="ftco-section">
                            <div class="container">
                                   <div class="row justify-content-center">
                                          <div class="col-md-6 text-center mb-5">
                                                 <h2 class="heading-section">
                                                        Login
                                                 </h2>
                                          </div>
                                   </div>
                                   <div class="row justify-content-center">
                                          <div class="col-md-7 col-lg-5">
                                                 <div class="wrap">
                                                        <div class="img">
                                                               <img
                                                                      src="https://images.ctfassets.net/bdyhigkzupmv/6lySzcy7qcIN1tf81Qkus/5b5ac73daeaf61f9057c0b0dd8447a31/hero-guitar-outro.jpg"
                                                                      alt="Image here"
                                                               />
                                                        </div>
                                                        <div class="login-wrap p-4 p-md-5">
                                                               <div class="d-flex">
                                                                      <div class="w-100">
                                                                             <h3 class="mb-4">
                                                                                    Sign
                                                                                    In
                                                                             </h3>
                                                                      </div>
                                                                      <div class="w-100">
                                                                             <p class="social-media d-flex justify-content-end">
                                                                                    <a
                                                                                           href="#"
                                                                                           class="social-icon d-flex align-items-center justify-content-center"
                                                                                    >
                                                                                           <span class="fa fa-facebook"></span>
                                                                                    </a>
                                                                                    <a
                                                                                           href="#"
                                                                                           class="social-icon d-flex align-items-center justify-content-center"
                                                                                    >
                                                                                           <span class="fa fa-twitter"></span>
                                                                                    </a>
                                                                             </p>
                                                                      </div>
                                                               </div>
                                                               <form
                                                                      action="#"
                                                                      class="signin-form"
                                                                      onSubmit={handleSubmit}
                                                               >
                                                                      <div class="form-group mt-3">
                                                                             <input
                                                                                    type="text"
                                                                                    class="form-control"
                                                                                    onChange={(
                                                                                           e
                                                                                    ) =>
                                                                                           setEmail(
                                                                                                  e
                                                                                                         .target
                                                                                                         .value
                                                                                           )
                                                                                    }
                                                                                    required
                                                                             ></input>
                                                                             <label
                                                                                    class="form-control-placeholder"
                                                                                    for="email"
                                                                             >
                                                                                    Email
                                                                             </label>
                                                                      </div>
                                                                      <div class="form-group">
                                                                             <input
                                                                                    id="password-field"
                                                                                    type="password"
                                                                                    class="form-control"
                                                                                    onChange={(
                                                                                           e
                                                                                    ) =>
                                                                                           setPassword(
                                                                                                  e
                                                                                                         .target
                                                                                                         .value
                                                                                           )
                                                                                    }
                                                                                    required
                                                                             />
                                                                             <label
                                                                                    class="form-control-placeholder"
                                                                                    for="password"
                                                                             >
                                                                                    Password
                                                                             </label>
                                                                             <span
                                                                                    toggle="#password-field"
                                                                                    class="fa fa-fw fa-eye field-icon toggle-password"
                                                                             ></span>
                                                                      </div>
                                                                      <div class="form-group">
                                                                             <button
                                                                                    type="submit"
                                                                                    class="form-control btn btn-primary rounded submit px-3"
                                                                             >
                                                                                    Sign
                                                                                    In
                                                                             </button>
                                                                      </div>
                                                                      <div class="form-group d-md-flex">
                                                                             <div class="w-50 text-left">
                                                                                    <label class="checkbox-wrap checkbox-primary mb-0">
                                                                                           Remember
                                                                                           Me
                                                                                           <input
                                                                                                  type="checkbox"
                                                                                                  checked
                                                                                           />
                                                                                           <span class="checkmark"></span>
                                                                                    </label>
                                                                             </div>
                                                                             <div class="w-50 text-md-right">
                                                                                    <a href="#">
                                                                                           Forgot
                                                                                           Password
                                                                                    </a>
                                                                             </div>
                                                                      </div>
                                                               </form>
                                                               <p class="text-center">
                                                                      Not a
                                                                      member?{" "}
                                                                      <a
                                                                             data-toggle="tab"
                                                                             href="#signup"
                                                                      >
                                                                             Sign
                                                                             Up
                                                                      </a>
                                                               </p>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </section>

                     <script src="../../login-form-15/js/jquery.min.js"></script>
                     <script src="../../login-form-15/js/popper.js"></script>
                     <script src="../../login-form-15/js/bootstrap.min.js"></script>
                     <script src="../../login-form-15/js/main.js"></script>
              </div>
       );
}

// Login.propTypes = {
//        setToken: PropTypes.func.isRequired,
// };

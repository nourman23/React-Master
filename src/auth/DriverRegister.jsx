import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import { Alert, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
// import { Select, Option } from "@material-tailwind/react";

const options = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];
function DriverRegister() {
  const navigate = useNavigate();
  const SignIn = useSignIn();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [license, setLicense] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");

  const data = new FormData();
  data.append("name", name);
  data.append("email", email);
  data.append("gender", gender);
  data.append("age", age);
  data.append("phone", phone);
  data.append("image", image);
  data.append("license", license);
  data.append("password", pass);
  data.append("password_confirmation", confirmPass);

  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/reactDriverRegister",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    data: data,
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage((prev) => ({ ...prev, register: "" }));
    setLoading(true);
    axios(config)
      .then((res) => {
        // console.log(res.data.access_token);
        if (
          SignIn({
            token: res.data.access_token,
            expiresIn: 1000,
            tokenType: "Bearer",
            // authState: setCurrentUserToLocal(res.data.data.user),
          })
        ) {
          setLoading(false);
          return navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);

        setLoading(false);

        setMessage((prev) => ({
          ...prev,
          register: error.response.data?.message,
        }));
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        handleRegister(e);
      }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBCard className="col-5 mx-auto">
          <MDBRow className="g-0 ">
            <MDBCol className="col-lg-12 ">
              <MDBCardBody className="d-flex flex-column pb-0 ">
                <div className="d-flex flex-column mt-2 align-items-center">
                  <p className="h3 fw-bold mb-0">Foods Recipe</p>
                </div>

                <h5
                  className="fw-normal my-4 pb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>
                {message.register != undefined ? (
                  <Alert variant="danger"> {message.register} </Alert>
                ) : (
                  ""
                )}

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Your Full name"
                  id="formControlLg"
                  type="text"
                  size="md"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Email address"
                  id="formControlLg"
                  type="email"
                  size="md"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Your Age"
                  id="formControlLg"
                  type="number"
                  size="md"
                  required
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Your Phone Number"
                  id="formControlLg"
                  type="text"
                  size="md"
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <Select
                  className="mb-4"
                  placeholder="Your Gender"
                  options={options}
                  onChange={(e) => {
                    console.log(e.value);
                    setGender(e.value);
                  }}
                  required
                />
                <div>
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center mb-4 justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center p-1">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10  text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      {image ? (
                        <span className="text-grey pb-3 pt-2">
                          {image.name}
                        </span>
                      ) : (
                        <>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload your image
                            </span>
                            <span> or drag and drop</span>
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      required
                      onChange={(e) => {
                        // console.log(e.target.files[0]);
                        setImage(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="license-file"
                    className="flex flex-col items-center mb-4 justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center p-1">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10  text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      {license ? (
                        <span className="text-grey pb-3 pt-2">
                          {license.name}
                        </span>
                      ) : (
                        <>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload your license
                            </span>
                            <span> or drag and drop</span>
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            pdf (MAX. 10000)
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      id="license-file"
                      type="file"
                      className="hidden"
                      required
                      onChange={(e) => {
                        // console.log(e.target.files[0]);
                        setLicense(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Password"
                  id="formControlLg"
                  type="password"
                  size="md"
                  required
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Confirm Password"
                  id="formControlLg"
                  type="password"
                  size="md"
                  required
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                />

                {!loading ? (
                  <Button
                    className="mb-2 px-5 bg-dark border-dark"
                    size="md"
                    type="submit"
                  >
                    Register
                  </Button>
                ) : (
                  <Button
                    className="mb-2 px-5 bg-dark border-dark"
                    size="md"
                    type="submit"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </Button>
                )}
                {/* <LoginWithGoogle
                  handleLoginWithGoogle={handleLoginWithGoogle}
                /> */}
                <p
                  className="mt-5 pb-lg-2 text-center "
                  style={{ color: "#393f81" }}
                >
                  have an account?{" "}
                  <Link to="/login" style={{ color: "#393f81" }}>
                    Login
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </Form>
  );
}
export default DriverRegister;

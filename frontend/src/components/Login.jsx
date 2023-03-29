import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, FloatingLabel, Form, FormLabel } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function Login(props) {
    const navigate = useNavigate();
    const [isValidUser, setIsValidUser] = useState(false);
    const [loginInput, setLoginInput] = useState("");
    const loginHandler = (e) => {
        const { name, value } = e.target;
        setLoginInput({ ...loginInput, [name]: value });
    };
    console.log("login", loginInput);
    // console.log(isValidUser);

    return (
        <div id="sign" className="d-flex align-items-center justify-content-center">
            <div className="login ">
                <Form
                    style={{ width: "26rem" }}

                >
                    <div className="text-center title">
                        <FormLabel className="ml-3 ">LogIn </FormLabel>
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control
                            required
                            type="email"
                            placeholder="name@example.com"
                            name="email"
                            onChange={loginHandler}
                            value={loginInput.email}
                        />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={loginHandler}
                            value={loginInput.password}
                        />
                    </FloatingLabel>

                    <p className="text-end forgotPass">Forgot Username/Password?</p>
                    <div className="text-center">
                        <Button
                            variant="primary"
                            type="submit"
                            // onClick={() => navigate("/dashboard", { replace: true })}
                            onClick={(e) => {
                                const email = loginInput.email;
                                const password = loginInput.password;
                                props.setUserEmail(email);
                                console.log(email, password);
                                e.preventDefault();
                                axios
                                    .get(`http://localhost:4000/user/${email}/${password}`)
                                    .then((res) => setIsValidUser(res.data))
                                    .then(() => {
                                        console.log(isValidUser);
                                        if (!isValidUser) {
                                            alert("Invalid User");
                                        } else {
                                            props.emailFetch();
                                            navigate("/Home", { replace: true });
                                            setIsValidUser(false);
                                        }
                                    })
                                    .catch((err) => alert("cardFetch", err));
                            }}
                        >
                            LOGIN
                        </Button>
                        <p className="pt-2 forgotPass">Don't have an account?</p>
                        <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={() => navigate("/SignUp", { replace: true })}
                        >
                            SIGNUP
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;

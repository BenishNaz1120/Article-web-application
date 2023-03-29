import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, FormLabel, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
    const navigate = useNavigate();

    const [signUpInput, setSignUpInput] = useState("");

    const signUpHandler = (e) => {
        const { name, value } = e.target;
        setSignUpInput({ ...signUpInput, [name]: value });
    };

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            axios
                .post("http://localhost:4000/user", signUpInput)
                .then((res) => props.setInput([...props.input, res.data]))
                .catch((err) => alert("CardPost", err));
            props.setInput([...props.input, signUpInput]);
            navigate("/user", { replace: true });
        }
        setValidated(true);
    };

    return (
        <div id="sign" className="p-2 d-flex align-items-center justify-content-center">
            <div className="signup" >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="text-center title">
                        <FormLabel className="ml-3 ">SignUp Form</FormLabel>
                    </div>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="firstName"
                                value={signUpInput.firstName}
                                onChange={signUpHandler}
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="lastName"
                                value={signUpInput.lastName}
                                onChange={signUpHandler}
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Email Address</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Email Address"
                                    aria-describedby="inputGroupPrepend"
                                    name="email"
                                    value={signUpInput.email}
                                    onChange={signUpHandler}
                                    required
                                    hasValidation
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter Valid email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={signUpInput.password}
                                onChange={signUpHandler}
                                placeholder="Password"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Password doesn't match.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">SignUp</Button>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;

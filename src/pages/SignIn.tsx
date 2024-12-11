import './styles.css';
import {Button, Container, Form} from "react-bootstrap";
import {ChangeEvent, FormEvent, useState} from "react";
import {URL_API} from "../constants.ts";
import CookieManager from "../utils/cookieManager.ts";
import {useNavigate} from "react-router-dom";
import {customEvent} from "../utils/customEvent.ts";

type FormData = {
    email: string;
    password: string;
    confirmPassword: string;
    surname: string;
    name: string;
    adminKey?: string;
};

export const SignIn = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        confirmPassword: '',
        surname: '',
        name: '',
        adminKey: ''
    });
    const navigate = useNavigate();

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const bodyObj: {
                    email: string;
                    password: string;
                    surname: string;
                    name: string;
                    adminKey?: string;
                } = {
                    email: formData.email,
                    password: formData.password,
                    surname: formData.surname,
                    name: formData.name
                };

                if (formData.email.includes('@company.com') && formData.adminKey) {
                    bodyObj.adminKey = formData.adminKey;
                }

                const response = await fetch(`${URL_API}/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyObj)
                });

                if (response.ok) {
                    CookieManager.setItem('isLoggedIn', 'true');
                    customEvent.emit('changeCookie');
                    navigate('/');
                } else {
                    const errorData = await response.json();
                    alert(`Registration failed: ${errorData.message}`);
                }
            } catch (error) {
                console.error('Error:', error);
                alert(`Login failed. Please try again. ${(error as {message: string}).message}`);
            }
        }
    };

    const validateForm = (): boolean => {
        const { email, password, confirmPassword, surname, name, adminKey } = formData;

        if (!email || !password || !confirmPassword || !surname || !name) {
            alert('All fields are required.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }

        if (email.includes('@company.com') && !adminKey) {
            alert('Admin key is required for company accounts.');
            return false;
        }

        return true;
    };

    return (
        <div className={'sign-in'}>
            <Container className="mt-5">
                <h1 className="mb-4">Sign In</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSurname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            placeholder="Enter your surname"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </Form.Group>

                    {formData.email.includes('@company.com') && (
                        <Form.Group className="mb-3" controlId="formAdminKey">
                            <Form.Label>Admin Key</Form.Label>
                            <Form.Control
                                type="text"
                                name="adminKey"
                                value={formData.adminKey}
                                onChange={handleChange}
                                placeholder="Enter admin key"
                                required
                            />
                        </Form.Group>
                    )}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

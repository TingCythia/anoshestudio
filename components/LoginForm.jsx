import React, { useState } from 'react';

const userExists = (email) => {
    // Check if the user already exists in the database
    // You can replace this with a real API call in your actual code
    return email === 'existinguser@example.com';
};

function LoginForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        formType: 'signup',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.formType === 'signup') {
            const userAlreadyExists = userExists(formData.email);

            if (userAlreadyExists) {
                alert('User already exists with this email');
                return;
            }

            console.log('Signing up...');
        } else {
            console.log('Logging in...');
        }

        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {formData.formType === 'signup' && (
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
            )}
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                {formData.formType === 'signup' ? (
                    <button type="submit">Sign Up</button>
                ) : (
                    <button type="submit">Login</button>
                )}
                <button
                    type="button"
                    onClick={() =>
                        setFormData({
                            ...formData,
                            formType: formData.formType === 'signup' ? 'login' : 'signup',
                        })
                    }
                >
                    Switch to {formData.formType === 'signup' ? 'Login' : 'Sign Up'}
                </button>
            </div>
        </form>
    );
}

export default LoginForm;

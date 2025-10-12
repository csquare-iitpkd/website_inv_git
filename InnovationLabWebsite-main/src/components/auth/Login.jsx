import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const Login = () => {
    const navigate = useNavigate();

    const handleSuccess = async (credentialResponse) => {
        console.log(credentialResponse);
        const idToken = credentialResponse.credential;
        const decodedToken = jwtDecode(idToken);
        
        // Basic validation for IIT Palakkad email
        if (decodedToken.email && decodedToken.email.endsWith('@smail.iitpkd.ac.in')) {
            try {
                // You would send the token to your backend here
                // const response = await api.googleLogin({ token: idToken });
                // localStorage.setItem('token', response.data.token);
                // localStorage.setItem('user', JSON.stringify(response.data.user));

                // --- MOCK BEHAVIOR ---
                console.log("Simulating backend login for:", decodedToken.email);
                localStorage.setItem('token', idToken); // Use idToken as mock token
                localStorage.setItem('user', JSON.stringify({ name: decodedToken.name, email: decodedToken.email, picture: decodedToken.picture }));
                // --- END MOCK BEHAVIOR ---

                navigate('/dashboard');

            } catch (error) {
                console.error("Login failed:", error);
                alert("Login failed. Please try again.");
            }
        } else {
            alert("Access restricted to @smail.iitpkd.ac.in emails only.");
        }
    };

    const handleError = () => {
        console.log('Login Failed');
        alert("Google login failed. Please try again.");
    };

    return (
        <div className="text-white min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-4 text-orange-500">Project Handler Login</h1>
                <p className="text-gray-400 mb-8">Please sign in with your official IIT Palakkad email address.</p>
                <div className="flex justify-center">
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={handleError}
                        useOneTap
                    />
                </div>
                <p className="text-xs text-gray-500 mt-8">
                    By signing in, you agree to the terms of use of the CSquare Innovation Lab portal.
                </p>
            </div>
        </div>
    );
};

export default Login;

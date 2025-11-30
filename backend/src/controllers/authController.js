// import { OAuth2Client } from 'google-auth-library';
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// export const googleLogin = async (req, res) => {
//     const { token } = req.body;

//     try {
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: process.env.GOOGLE_CLIENT_ID,
//         });

//         const { name, email, picture } = ticket.getPayload();

//         // Validate email domain
//         if (!email || !email.endsWith('@smail.iitpkd.ac.in')) {
//             return res.status(403).json({ message: 'Access restricted to @smail.iitpkd.ac.in emails only.' });
//         }

//         const user = { name, email, picture };

//         // Create a JWT
//         const jwtToken = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET, {
//             expiresIn: '7d', // Token expires in 7 days
//         });

//         res.status(200).json({ user, token: jwtToken });

//     } catch (error) {
//         console.error("Google login error:", error);
//         res.status(400).json({ message: 'Invalid Google token' });
//     }
// };

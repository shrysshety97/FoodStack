import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'

    console.log("Received token:", token);

    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized, login again" });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(token_decode);

        req.body.userId = token_decode.id;
        next();
    } catch (err) {
        console.log("Token verification error:", err);

        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, message: "Invalid token signature" });
        }

        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token expired, please login again' });
        }

        return res.status(401).json({ success: false, message: "Error verifying token" });
    }
}

export default authMiddleware;

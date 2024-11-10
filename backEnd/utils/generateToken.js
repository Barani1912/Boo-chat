import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SIGNATURE, { expiresIn: '15d' });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,   // millisecond
        httpOnly: true,  // prevent XSS attacks cross-site scripting attacks
        sameSite: 'strict',  // CRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    });
};

export default generateTokenAndSetCookie;


/////////////////


// const jwt = require('jsonwebtoken')

// const generateTokenAndSetCookie = (userId,res)=>{
//     const token = jwt.sign({userId},process.env.JWT_SIGNATURE,{expiresIn:'15d'})

//     res.cookie('jwt',token,{
//         maxAge: 15 * 24 * 60 * 60 * 1000,   //millisecond
//         httpOnly: true,  //prevent XSS attacks cross-site scripting attacks
//         sameSite: 'strict',  //CRF attacks cross-site request forgery attacks
//         secure:process.env.NODE_ENV !== "development"
//     })
// };

// module.exports = generateTokenAndSetCookie
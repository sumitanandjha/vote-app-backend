const jwt = require("jsonwebtoken");

function jwtDecoder(token){
    return jwt.verify(token,process.env.JWT_SECRET);
}

module.exports = jwtDecoder;
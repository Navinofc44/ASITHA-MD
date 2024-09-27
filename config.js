const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zaImzCLB#tQOiybZmuS2eZDDgRjj--aQZDHRJa89wivCoM1EL__8",
MONGODB: process.env.MONGODB || "mongodb://mongo:tZqOskNPFBvoJwXqFTbicqRdmVMzqKtt@autorack.proxy.rlwy.net:59140",//enter mongo db url
};

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=ymYGhagA#axjSoaNE3HbOwYAk67_92gOk2EJMz6AnyfcgXFblbcA",
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'queenelisa35': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN,
MONGODB: process.env.MONGODB || "mongodb+srv://myrender971:iwS8N2qB3Q8wMw83@cluster0.he9fd.mongodb.net/"    
};

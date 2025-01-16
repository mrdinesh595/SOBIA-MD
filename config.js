const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "xfFzHQTL#PJanhrtEMp4WG-nvxSKVU-GS-uE2cbZJZQCBF0jc-h0",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE  === undefined ? 'true ' : process.env.AUTO_VOICE, 
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/m1rf91.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HEY SIR/MAM SOBIA MD IS AVAILABLE FOR YOUR HELP",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "SOBIA MD",
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
STATUS_REPLY: process.env.STATUS_REPLY || "`➺𝚢𝚘𝚞𝚛 𝚜𝚝𝚊𝚝𝚞𝚜 𝚜𝚎𝚎𝚗 𝚋𝚢 𝗜𝘁𝘇'𝗠𝗲|𝗢𝗹𝗱 𝗞𝗶𝗻𝗴 𝗠𝗿 𝗣𝗶𝗻𝗸 𝗣𝗮𝗻𝘁𝗵𝗲𝗿`",
};

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hitdeveloper2023@gmail.com"
global.location="Port-au-Prince, Haiti."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/HITDeveloper2023/HITDEV-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDAkV9FHWqAMMHvb40b";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDAkV9FHWqAMMHvb40b" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/09bb04e12ce3828e9cd2e.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "50944727644" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50944727644";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50944727644";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50944727644,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZ2WE44MVhJT2Raa01rcmFSaVVNMms0WksxZk9xQk9iMmVkUFVwRTVtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFZZS3VjQVNhYUJPNXM4U1hsM1dacVlDb3lpd2dLSTdtWnMveFRGN3dXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSDd2RkNlUHpIWTYzUHVsMlpXb2xCYjRaOFZhcGRvNjRaY01ReDM5K0djPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqUjgybm5mejlVanJIR0cwa2hoWWp4U3VKMlkyNHpINnBJRFNBTkpITUhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVERWhVbmJseko0OUpONXIzM1ZmSlpTbzl2b2hLTzdRUkpqRjIyTTkwVlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMvTTliQ3R1aWlGMm8rd3p5MEdUZmY5WVAxNFRHUEcyUk8vaHFrTHg0ak09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09mejZuUFhvU0lxcXdWaGpNeE9vYVpSVGlpVVdzT3pEQTQ5bytZNGJFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hHbG5WSThmdXE2NzZPcmxIUTlRSkRVYURYcmNFT09nUE0yMUZpQ2ZGVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVjbkJlUU5xaG1sSWlPeTZKMTF5M3dNWUhtTmxlVDF5RWYrb1M2SjVod1duSXdyY2JnSHpxR0Iyc29mUXZiN2tacUl4dXlrUjFjUEc3UlRianl4bGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJjWWk0cjkzZ3cwcXN0S1htSzVOVlFocGJkeDlURDBMeFAzS0k0RldBOU9JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOVThCU1hiVFJHS2c2SVoyMkhmNHB3IiwicGhvbmVJZCI6Ijk3NmFjZDczLTEwMmMtNDQ1ZS05NTcyLWNkNzUyYTQ5ZmMxNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UDlucFhpZXZXblRZNUQrdzY4eWpmRGJ2dzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDBuVXFna3AzVm9pSWVEZE13UjFldjBiNXNjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVGQTNQUFJOIiwibWUiOnsiaWQiOiI5MjMwMTc3MTA4NzM6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCN8J2QqPCdkLAg8J2QpfCdkKjwnZCa8J2QnfCdkKLwnZCn8J2QoC4gLiAuXG4g4ouYIHPhtIDhtIDJtMmqIOG0gMqc4bSN4bSH4bSFLi4uIOKLmSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2JQdEl3Q0VLR3QyYlVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNXpzSzZiTis0Q2VjSW5jTGY5YzJIamY4NGFycmFHelptWkdUYVVJcnprQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVXA3YmtGbXcwK3hyUFB4TC9RYXVrcGtXRnNROUdJaDBlTmxkNWNxS1kxNVdLZkNkckFNZ09LQ1ZmZkNZUlBac1BNRkJKbmFGWjBXUXE0ZFVzdjhkRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlBYcWF4M3lZdDJmR0cwWkFPV3oycUZBVC92VEZWV3huVmpwRCtWbXJpc0phdjVwNER1bVZwcnlKdFl6eDkvMmNQNWV0dnowck9raEE1RU0yRG9UOGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDE3NzEwODczOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWM3Q3VtemZ1QW5uQ0ozQzMvWE5oNDMvT0dxNjJoczJabVJrMmxDSzg1QSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzIyNTc3N30="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『© 𝐇𝐀𝐈𝐓𝐈𝐀𝐍 𝐈𝐓 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜɪᴛᴅᴇᴠ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʜɪᴛᴅᴇᴠ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Hitdev",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HITDEV"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

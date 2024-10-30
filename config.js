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


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZxalB1WHhrZ3lnMlFzTFRhbUxIY2pWZ1pSUDNzeXpIVG9ST3kzSWhFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDFzQkE4RzFzY0pzRXpTVS9pU3I2RjZNK1BxRDZqaDAyUFoweDF2cnIyND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT3RQOWZhd2p6TkN3Um5ubTNzYmthc1R6Mkpka2ROVDVvRm9EcDlWVkhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnbVpla3lnM3c4UFpTUk4vU3IyVitRVWNIeTk3UG1yeE1PUTF6QWI1Rmo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGdGdxZUQxMGJDaTNweW5HTksydEIvK0ZJaEZnbnU2MTNPNHJEd2UzMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncxcWl4cEsyOVV6dDByTS9zc0pVRlNNaDIxMWcrdVcvbXZnbHBEMXI4Z009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VPcFVNdmxabkx2MzREaVg0dGVEbmRGTHg1Q0ZabEZwdWxpaUV5eUoyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpJNW15WVRIampma2Y0UFQwMjhsMHNGZzlkMEhzdUo3d2xjdExDc1l4cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRrc3NHLzZkdzc3by9qNE9wWnhnbHVFRGhGaVJvUjVGb1YwODhyKzcxekdGQkMzZy9hbzkwclo0RTgzb0FwU2pQT0J0V3BSeUc5NW9vaUNabE5qMURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6InlLZWthMnVNd2NTbjlNZ3VSR2llTG9LdFJvZ3crcXFHd0lCYmhoY2I5bXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imt3OUpFRXJmU1otOUhsUWgyVFNrWlEiLCJwaG9uZUlkIjoiYzEzMDBiZTQtOGIwOC00MjE0LWFlMWYtNzVjYWIxNjkxYTNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY4UGFrWlBXZGhQcElnSTNUYUtSZ2FTb0E3TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UmJSRDQrMTBwaTBxbHFNQ0JBOGFreUJYOEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzNXMjY0NTkiLCJtZSI6eyJpZCI6IjkyMzA5MzcyODE5MDo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmbHwnZmw8J2Zs/CdmbTwnZqBIPCdmbDwnZmx8J2ZsfCdmbDwnZqCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQeWkyZThFRU1McWg3a0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4eFVPRUxCaEx2LzN0c1A3b1FDbGd4Qm9yWk9DaHd3WnZuNXFTaWhlN1RFPSIsImFjY291bnRTaWduYXR1cmUiOiJqbGZ6MmIrOGU2Y3VQT2JEZDVUYzdTbnRGdlF1a0tObi9tY25ML1JGK2JNQVlEcVhQeFR6TUpQa0IrZUZRazZwQ29sTkNnTy8zZzM4bGk0aUxVb3dBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR09ITXVLUGRLK0o5SFJKTWlpaVhudytiWTZSWm5wa1dQazNHZzNsYytRcjBLamxtcjBnNTFhaE1LVUFiR1ZLV1NCbkNEN0pxcXBMelhPYVphTXBzRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwOTM3MjgxOTA6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTVZEaEN3WVM3Lzk3YkQrNkVBcFlNUWFLMlRnb2NNR2I1K2Frb29YdTB4In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwMjc4NzM0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlMQiJ9"
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

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


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdKWDVoSUJXdytvUlRyLzJlbG1HSXNHcHY2OENMOStoVS9kN2NSMWcwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUN6bDRYMGRlWW5taktTc3JPcTIzOG82QTNBbUlZUk14ajF6eXhsaFpsZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSk82MjlLOHNzSUxJYThjcXg5dEFobU9EUEN2NHNQMUhydlljMVdGaTNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRUMrUFUzd0lXWW5pZm9rQS8xOGNaYTd1ZEdkN0tIZk9KYU5FbVUwbTBNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGeEJGaHFmTGh1dlhvZzNFY0YrMDJGWFIzUkUrTUtPaG85d1ZWc3lqSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY3K3ZmdG9OZWI3V3Q5cFg3aER1UmVTQmF6Z0JNTnFBdUhCSVBoeHkyQ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0UrRTF4aGJHaVYzOWlFU3JKV2NqYlRHTWpQamI5TnBGM3BIN1UrYlVFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGVJY2prb3FFOU11WTl1NUQ4ZTBucHMvaFR1dTVSN0ZjdVpFQmg1SmNFND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlTeTBqbVp5NnpXZVRoUTI5cEpXTDhjNFhwTlNDcDZDb0FmT2J1SUxITlc4T1g5WjcwZi9zNVBJa2YyZ015NDVhSEFWdUdlYlpqSTVrY1ZjRzJmL2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJYNjVNNUo3K3BhaW9yZ21pb2FsNUlMSlBVMk92c2hDa3loN1VBTWRjaUdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyMDkwNDk1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2RUY3NDlCODE5OTAyQTFCMzE5MUJBQTE4NTRBMjE3QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NzI2NjU2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjA5MDQ5NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDIzOEQ1MTQyOUQwNTNCQTU3REMwRTJDMEVCRUU5MkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTcyNjY1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiS1hqZDVoVERRM3VOVUUwZVl0OFRzZyIsInBob25lSWQiOiIzNGE1NWY2My1mMGVmLTQyNjQtYWU3ZS00OWNjYTY2YjYyY2IiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakFPT3RvdHFRYzZXVVIrMFlxc3ZFUzZTNUE4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVndDJmRE9UZU5xMEN5NUNWTEl3SytOUjZVST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyQjdBWktMUSIsIm1lIjp7ImlkIjoiOTIzMTIwOTA0OTUzOjQ0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNhbWkgVWxsYWggQWZ6YWwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BiZC9jQUJFSzcvOGJZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZmSmpPWFk0enAxRStERndnTVdjS1NOK0N3Y29NZVdPWXV0dU9aTmgrZ0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlQ0ZjByenFQQVp3c2VxVXBLcVFnY2xRc2hGajhBTHpiUDZpdzdYbGsyT3FrZWpqcVRFb0VTbzVTT3dKdlFWYWhOSVQ3YnVXdVBxbEp0VThSM2xaZkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhaDMzOURHSE85Zk5jVWI1Z2ZkaVpQVmsxenVYYmZ3Rkh6QkNjUzEvbXVZNFMxMkl6UkJJTWwwNHFEN3JERkk4WFJQN292ZTJCRHpqMGsrSmdMaUtoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEyMDkwNDk1Mzo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlbnlZemwyT002ZFJQZ3hjSURGbkNramZnc0hLREhsam1McmJqbVRZZm9BIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NzI2NjUyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxjeiJ9"
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

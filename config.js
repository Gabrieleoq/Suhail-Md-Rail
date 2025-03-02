const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "false" ;
global.devs = "923184474176"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI|| ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan="https://replit.com/@SuhailTechInfo/SuhailMdPairingCode?v=1";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl= process.env.GURL   || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,400771048185";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "400771048185";

module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" ,// ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "🥵❤🌹💀 ",
  botname: process.env.BOT_NAME   || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  sessionName:process.env.SESSION_ID|| "SESSION_06_28_03_02_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5xYno0R3lFT09tbUxVazA3eDRNbjFyR2RRTVhkanpqNUZ2ZUswZFZsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2s0TWRlaktYSHBjdmZaNzJSMG5iMTh4TFpHaVdqWTJHaG4xZTZLQ0pqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxT2FWK2FzQktGVWpuQWJkSXBjd1BXL2xscGhtYXJkYVQ0SzNtRXVCQzJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkQVZkWTNWVHVKTVVqSjl5OWxIUmhzSlRuZU1ia09DMGpSbmpESjdXODI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1MQ3U3TEpHZHVmNlgwU1plL2RwRTRiZGpnRWNObHRaVlU3enFLM2VUMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImordDY0WDIrUVdidFBmcWdEY3ZoQ2ZzRWFnOUQ0VG1hZlUwRmdKdVRLMkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVxZFdmU1NadEFjTUQ2M2phTnYydEV4TzlaYlNxSVl3QnlxbFAyOHpIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzZDbC9XTWQydlVoYThTTko2THd0K0Zmakp6dkdKRVRFZDM4NEE3em5qOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdDeWhlUm5JWDNsY2VScUN2Y0VFWTh2cnFDQkdGRU1xZ21sc2piSS9CeHpuQVRmY2tGNnNTcEg1aXNKb1JLclcxM08zdS8xTTVjeENNZlUxK0syNkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IlhyYWVRTm0vdjU5SDlTa0RjTkIzVHJZSUp4VmZ4QUpjRFluazZ0Qi9kUEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjMyVm5IcDBtUVhpX3RCY3R6V2dhQ1EiLCJwaG9uZUlkIjoiNWMyMmEyNWYtZjEwNi00NDU2LTliYjctNmEwZTRiNjFkZDQ4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVXQWJrY0VXeWlzRnpBblRoZzBLdWdOaG5NRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2RVZWbGh4RzY1Wm9KdVRSSGU5Vm5yZC9lNXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTDFEWEdBUzkiLCJtZSI6eyJpZCI6IjQwNzcxMDQ4MTg1OjkwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYVg4TkFHRU83MGo3NEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZRXVkQU5jWmxPUTJxSHpHL0tkVmdTK0NLR01VWXRJanJ4WDJpQU05b3hZPSIsImFjY291bnRTaWduYXR1cmUiOiJVcXJ4ZUpQQkdaSWFsWjl3MXN4UDVpN0dyZTQ1aG4xL2tvWm83SnZyWURsMXFYTlI5SG4wMHlCbGNXZ0J3TE9ScEU3NndCMFRYdkdKQkoweVZVTzFDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicVduZVpVRndXa3NBbmkwdTJ2cXltRkRxdTVxWjR3YnhHcTJMdm1JUUVpSFg5QmlNTGkxdDU5NUx3OXhqNHpMVkphZmg1SlMweDM4UzlDdi9CdEdlRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0MDc3MTA0ODE4NTo5MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXQkxuUURYR1pUa05xaDh4dnluVllFdmdpaGpGR0xTSTY4VjlvZ0RQYU1XIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwODk2ODgyfQ==".
  userImages:process.env.USER_IMAGES|| "hi nigga",
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

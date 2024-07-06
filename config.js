const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254114537515";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254114537515";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_52_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDg2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiamJSZ1U2RlR4b1gyRnh1U2o0NEY2WWZXajV1TktoR2dUZkd2ejdtcHVwYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiczh0MV96NElRSWlSWWoySXNVUW9sd1wiLFxuICBcInBob25lSWRcIjogXCJlMjM5YmI3MC1iN2NjLTQ0M2EtOWViOC1hNzgxOWM2ZDlmODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMjUwLFxuICAgICAgMjksXG4gICAgICAxMzUsXG4gICAgICAxOTksXG4gICAgICAxNTEsXG4gICAgICAxODcsXG4gICAgICAxMTksXG4gICAgICA1OSxcbiAgICAgIDE1NixcbiAgICAgIDAsXG4gICAgICAxMDQsXG4gICAgICA0NSxcbiAgICAgIDM4LFxuICAgICAgMjQ0LFxuICAgICAgMjI5LFxuICAgICAgMjM2LFxuICAgICAgMTU4LFxuICAgICAgOSxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDEyMSxcbiAgICAgIDkxLFxuICAgICAgODIsXG4gICAgICAxMDksXG4gICAgICAyNCxcbiAgICAgIDQ5LFxuICAgICAgMTM5LFxuICAgICAgNyxcbiAgICAgIDEwMixcbiAgICAgIDMxLFxuICAgICAgNDgsXG4gICAgICA0MSxcbiAgICAgIDExMixcbiAgICAgIDMwLFxuICAgICAgMTk3LFxuICAgICAgNTcsXG4gICAgICAyMzQsXG4gICAgICAxODksXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVdDWFhLOENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNDUzNzUxNTo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU1ODY0NzY1ODYxOTkzOjUxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvcDcxQVFqOU9qdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia291Vk9qSDR3N3AzZlJYVWVqUkgyVG5WVENYVFlxTGhtVHRBdTNqV0ZUbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGTDhUT0s1S1lyRkpFaXhEdjNoSHFIMWdrUXFkNS9oNGkzcUYzVExQRytJVkpGSHI0YlY1cU1JRURxcHpDV3hteVVxN01zQ3piamorTUVuYS9mTzdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhSG9qd28wK3RBM25nbXA2VmxxdDBkU1ZTUmppOTRvdUZGWFRGSUlqNUtaKzdyeHdNRHJiNE82dFpJL2dxQlh1L2ZLV0taWFpBYktacUNFYTIwMGJDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTQ1Mzc1MTU6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI0ODcyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5ZV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTllXLmpzb24iOiAie1wia2V5RGF0YVwiOlwieWNDUWI4a1lFNmVnTU4yN1ZCUTFSeWxFUm1MUnNqY0M2U0FndTdScEdwWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjk2MDQyMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ VANISHTECH』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "JOJO PICS",
  packname: process.env.PACK_NAME || "JOJO PICS",
  botname : process.env.BOT_NAME  || "VANISH-MD",
  ownername:process.env.OWNER_NAME|| "VANISH-JOJO💝",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voce_Id = process.env.AITTS_ID|| "37";





















global.rank = "LORD VANISH"
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

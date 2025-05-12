// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FQRndqLysrVTQ2N1I4WDI0UUh6Ri9oMnltN0lCY3BobGlaNUtXcXdIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREtLMEdPOVpFVC9BOWEyQXNZMlpoRWQzL0hXQURZeVVqV3VocXFuZm1Wdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR1U1aEt4cWN6b3o2amwzRTMwV2xsbjVhVnZjWnZwaHJpNVFLSXVuTFVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMVdlQ1h6NkE3SStCUUpKQVlRdDFmYmxLeWlMUzNEVTBScWc0QmxzSVQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLUGRCMDkra29aT0lZaktlVXhJcE9ZdnBFOVNQK2s5UVQ2Ry9DUVU1blk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpMbjBqNVF0TDkyd0ZCUlhKODJXeTVNWXlkUjlDSlFVbnpVWi8zZXJXekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUU1SXFuaDlJL3FJUy85U0lFUnBOMVg1L3R2QUtxSm9tT3RuOW8rOGNVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFZWdWhVcDNBL3JYazlUSDM4T2IyT1llWjZ1WVp6Q2IzNXRYNnBldFZHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh6S2NYSjZiOVArbE05MWVyWTcvVFhMbWppS25wSHQybm9NVE1ZdVcxeFp6WWRJMGVxTUxla1RaZzFEMXJ0VnFMRFhLdm9xQXo0bThoaVk2UmhyNWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJVN25oOFhPWldBYjVidDlpU0JyZ0xOaEN5dEZmOER4NUIxQ1pjWm9BbWRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwOTBfbE9ja1NUTy1PMDNGMU01eUdBIiwicGhvbmVJZCI6IjA1MmJjMDA3LTdkN2EtNDM5MS04MWVhLWNkZGFlNTU0ZGQwMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrU0ZGckJLRndBdmEzci92V1lTTmdhZEJWTXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURrSFo2c2NSVWVjNUpYeWJnblZqaXR6c01ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpXU0VBTEdBIiwibWUiOnsiaWQiOiIyNjM3NzYwMzAzNTk6NDJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoid2FseiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTdYK3NnRkVQMmtoc0VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicW1GRmxPbGpRM0x5RkZ0ZDRrOVR3VWEyT2RrRWR1TVlFNC9EK3JTZ2EzWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZEdIZytDaTZUd3dBdU9Qb2oySTBZK3ZqUjk2L2VXN0lqSFpuQWNkN3UzRUtSdGwvTG1LNUNrVlFZSTkwVGxBZXFzUnlrVTJFenh2QmZ0Zll5bXl1QVE9PSIsImRldmljZVNpZ25hdHVyZSI6InZIc01UaExRd0ZpcGx0ZDhNUDB1clRlOWNJYVpSMktRaldPYlZ4dEFJcy95ejYvcHRlaGhQcEgxbjdTeSt4Y29mS3ordElsYjdzSEJnOEhhSHVjdmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc2MDMwMzU5OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFwaFJaVHBZME55OGhSYlhlSlBVOEZHdGpuWkJIYmpHQk9Qdy9xMG9HdDIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDcwMzA2NjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjRGIn0=",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "walz",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "263776030359",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;

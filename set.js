/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURhbGRNVW5lTTlWYWd4SUNaZy9pV1M3V25lalR5THo1Q2RvN0tTY2ozRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZCthZURoN21hc2RxakVaWHpyd3J3cDZyN21ZYU5NY2NraitFeTdrMjNXOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSHFXdStBMXcrTVN4RnBqMkVSTTkxVU5keTEzNnpBMzA0cWlKUG5sNDJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SUlUSnJ5YjJYaVd3bWorUHFjbTUzUk9qa1FzcDh1Ry9GWGh0UFhjb1RvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBDN0lIb1ZpSjFoWnpwdCtCS0FpVWhIT2dVNkJTMnRtOVpGc1o2NFlpMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZRVDdLRWhUTHVtMUNyMGx2d1MyS01VZVVqZ1RhNUNVaWswRlQ2UXRhSGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0F5ZXEvVERVRHlQVkozZU9LdVhsZkRHLzN0RlJqR0U1d2Zmd0kyUm9FUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkpHVy9Sd2d2cjVJVTdLeDhicFhHVkRmK1QvS0wzVXJIdUk2cnQ0RldDaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBjdUF6d1g3cTVHNkJpNjBOd0IwTlFkcStuNTY3R1dFYmpHZWZNVTZ4Sjd5UDBWZkZndDZuencycTNuNkJ3QWVDRTlVd3RlKzg0RnNZWHUzM3Y3MUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6IitEcFRRRHhkOXVsOVRXQUJVZzdnLzBlU2JJWEpLbC9hd05IN05wbzZXTnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAyNjEzODM4NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBMEQxOEI2QkNGODU0NUY4NzcxMTJCOTlDNEFEMUQxNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1NjkxNDQ5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDI2MTM4Mzg0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5RUQzNjRGNzI4ODU1NDEyOUI1NjI4MkNBOTc0ODAzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDU2OTE0NTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJXVTRVYjZkU2t5S21UQkVLeXdXRmciLCJwaG9uZUlkIjoiYjA0ZjA3NTEtZmY3Mi00NGU3LWEzNDktNDU3NGQ2ZTQ0YzdiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFzc1pmUU56R0VEQkViSTdyczduT28yWmNDcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEMGtaMGZVS3l1MThXa21HWGZQelFNNGRJclE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOU1HWVdCNVAiLCJtZSI6eyJpZCI6IjIzNDcwMjYxMzgzODQ6NDlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2VtPCdlb/wnZaFIPCdla3wnZW98J2VtPCdlazwnZW5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOYVAwcGtIRUtIR3RNQUdHQ2NnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyVUZmZitvbnI1eU1ZWk95ak9vVFQyZWNTTlN3OHoyaXc4NU1PbUFKc0FFPSIsImFjY291bnRTaWduYXR1cmUiOiI5Nkp0YTFXZjJGVW9qOWxLT2I0MlRjaCtYbVJObHlQYmZlR1FsdnErNEtScjVyTzJoTmRkdmV1aXlsTXV6T3Y1U2lHd2JHODN2QU9MdzE0Q2o3T1BDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYWV1WE1kN0Flb1A5UnFFVndFajNENGk3bTdHdEd1Q2phbDBBd2hFcy9KaThJZEwwYy9GYm1OMmNYT3h6dGtzanBQZ2ppVWt1ZUNsNkhlQUZVUUMxQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDI2MTM4Mzg0OjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRsQlgzL3FKNitjakdHVHNvenFFMDlubkVqVXNQTTlvc1BPVERwZ0NiQUIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU2OTE0MzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0I0In0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'FALSE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '2347026138384';
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  

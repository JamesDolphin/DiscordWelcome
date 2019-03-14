const Discord = require('discord.js');
const bot = new Discord.Client ();
const env = require('dotenv').config();

bot.on('guildMemberAdd', member => {
   member.send("Hello, thanks for joining our discord server...");
   bot.channels.get(process.env.DCLOGCHANNEL).send(`${member}` + ' has joined the server and has been sent a PM.');
});

bot.login(process.env.DCTOKEN);

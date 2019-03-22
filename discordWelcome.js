const Discord = require('discord.js');
const bot = new Discord.Client ();
const env = require('dotenv').config();

bot.on('guildMemberAdd', member => {
   member.send(process.env.WELCOMEMESSAGE);
   bot.channels.get(process.env.DCLOGCHANNEL).send(`${member}` + ' has joined the server and has been sent a PM.');
});

bot.on('error', console.error);

bot.login(process.env.DCTOKEN);

const Discord = require('discord.js');
const bot = new Discord.Client();
const env = require('dotenv').config();

let messageLink = '';
let channelId = '';
let messageId = '';

bot.on('guildMemberAdd', member => {
   if (messageLink !== '') {
      member.send(welcomeMessage(member));
   }
   //bot.channels.get(process.env.DCLOGCHANNEL).send(`${member}` + ' has joined the server and has been sent a PM.');
});

bot.on('message', msg => {
   //IF msg.Author is ADMIN OR OWNER CONTINUE BELOW

   if (msg.content.includes('!message')) {
      messageLink = msg.content.replace('!message https://discordapp.com/channels/', '');

      let args = messageLink.split("/");

      if (args.length != 3) {
         msg.reply("Incorrect message link");
      } else {
         channelId = args[1];
         messageId = args[2];
         msg.react('✅');
      }
   }
});

bot.on('error', console.error);

bot.login(process.env.DCTOKEN);

//Sends message to user who joined discord
function welcomeMessage(member) {
   let channel = bot.channels.find(x => x.id == channelId);

   channel.fetchMessage(messageId)
      .then(message => member.send(message.content))
      .catch(console.error);
}

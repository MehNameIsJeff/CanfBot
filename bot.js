const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '~prefix') {
    	message.reply('My Prefix is '~' ');
  	}
});

client.on('message', message => {
    if (message.content === '~info') {
    	message.reply('This bot is made by CanWeabou#6284');
  	}
});

client.on('message', message => {
    if (message.content === '~help') {
    	message.reply('Commands for this bot is : ~info, ~prefix');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

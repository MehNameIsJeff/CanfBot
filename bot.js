const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '~ping') {
    	message.reply('Pinged you boi');
  	}
});

client.on('message', message => {
    if (message.content === '~info') {
    	message.reply('Made by CanWeabou#6284');
  	}
});

client.on('message', message => {
    if (message.content === '~help') {
    	message.reply('My Prefix is ~, Commands : ~ping , ~info');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

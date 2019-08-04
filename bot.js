cosnt Discord = require('discord.js'):
cosnt client = new Discord.Client();

client.on('ready', () => {
    console.log('I am Ready Sir!')
});

client.on('message', message => {
   if (message.content === 'ping') {
     message.reply('pong');
   }
});

// THIS MUST BE THIS WAY
client.login(process.env.yhCqA7I4GRilrblA8iSJ3MeitiSzhoUp);

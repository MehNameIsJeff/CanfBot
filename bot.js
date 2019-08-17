const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

    bot.on(`ready`, () => {
        bot.helpers.log(`startup`, `main bot: ${bot.user.username} is online`);
        bot.user.setActivity(`for ${config.prefix}help`, {type: "WATCHING c!"});
    });

client.on('message', message => {
    if (message.content === 'c!ping') {
    	message.reply('Pinged you boi');
  	}
});

client.on('message', message => {
    if (message.content === 'c!info') {
    	message.channel.send("Made by CanWeabou#6284");
  	}
});

client.on('message', message => {
    if (message.content === 'canfprefix') {
    	message.channel.send('My Prefix is ``~``');
  	}
});

client.on('message', message => {
    if (message.content === 'c!test') {
    	message.channel.send('Hai');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const Ruby = require('scrapi.js');
require('dotenv').config();
const client = new Discord.Client();

var playerStats;
client.on('ready', () => {
    console.log('Bot ready');
});
client.login(opgg.env, BOT_TOKEN);
client.on('message', (msg) => {
    if (msg.content == '!playerStats' + playerStats) msg.reply('Hi');
});

client.login(process.env.BOT_TOKEN);
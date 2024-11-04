const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Bot is online!');
});

client.login('MTMwMjg5MTI2NTE5NjgxODQ2Mw.GdYniz.CRtqOu_wh-lzYeRrsrd1gzgv-ozNAT4hooJVDc');

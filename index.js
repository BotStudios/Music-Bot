const Discord = require('discord.js');
const { Client, Collection } = require("discord.js")
const { readdirSync } = require("fs")
const { play, stop } = require('./commands.js');
const client = new Discord.Client();
client.login("YOUR_BOT_TOKEN");

client.on('ready', () => console.log('Bot has logged in!'));
client.on("ready", () => {
    client.user.setActivity("BotStudios", { type: "STREAMING", url: "https://www.twitch.tv/BotStudiosGithub" })
})
client.on('message', (msg) => {
  if (msg.author.bot) return;

  const prefix = '-'; //can set the prefix default is -
  if (!msg.content.startsWith(prefix)) return;

  const commandName = getCommandName(prefix, msg.content);
  const args = getCommandArgs(prefix, msg.content);

  if (commandName === 'p')
    return play(msg, args);
  else if (commandName === 's')
    return stop(msg, args);

  if (commandName === 'play')
    return play(msg, args);
  else if (commandName === 'stop')
    return stop(msg, args);
});
function getCommandName(prefix, content) {
  return content
    .slice(prefix.length)
    .split(' ')[0];
}
function getCommandArgs(prefix, content) {
  return content
    .slice(prefix.length)
    .split(' ')
    .slice(1);
}

// coded by BotStudios Team
// Version 2

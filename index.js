const Discord = require('discord.js');
const { Client, Collection } = require("discord.js")
const { readdirSync } = require("fs")

const client = new Discord.Client();
client.login('YOUR_TOKEN');

client.on('ready', () => console.log('Bot has logged in!'));

client.on('message', (msg) => {
  if (msg.author.bot) return;

  const prefix = '.';
  if (!msg.content.startsWith(prefix)) return;

  const commandName = getCommandName(prefix, msg.content);
  const args = getCommandArgs(prefix, msg.content);

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

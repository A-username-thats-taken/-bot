const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord=require('discord.js');
const client=new Discord.Client();

client.on('ready', () => {
  console.log(`Currently Serving ${client.users.size} users, In ${client.guilds.size} servers.`)
  client.user.setActivity('YouTube', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
});


client.on('message', async msg => {
  if(msg.author.bot)return;
  if (msg.content === '>myinfo') {
    msg.delete(3000)
    msg.channel.send(`Information about ${msg.author.username} \n \n Name: ${msg.author.username} \n ID: ${msg.author.id} \n Discriminator: ${msg.author.discriminator} \n Nickname (if one exists): ${msg.author.nickname}.`)
    .catch;
  }
  if (msg.content === '>myavatar') {
   msg.channel.send(`${msg.author.avatarURL} | ID: ${msg.author.avatar}`);
 }
});

client.login(process.env.TOKEN);
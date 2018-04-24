const Discord=require('discord.js');
const client=new Discord.Client();
client.on('ready', () => {
  console.log(`Currently Serving ${client.users.size} users, In ${client.guilds.size} servers.`)
  client.user.setActivity(`Serving ${client.users.size} users.`)
});


client.on('message', async msg => {
  if(msg.author.bot)return;
  
  }
  if (msg.content === '>myinfo') {
    msg.delete(3000)
    msg.channel.send(`Information about ${msg.author.username} \n \n Name: ${msg.author.username} \n ID: ${msg.author.id} \n Discriminator: ${msg.author.discriminator}`);
  }
  if (msg.content === '>myavatar') {
   msg.channel.send(`${msg.author.avatarURL} | ID: ${msg.author.avatar}`);
 }
 if (msg.content === '>reactmesenpi') {
  msg.author.send('BETA.')
}
});

client.login(process.env.LOL);
  
  // 50 line mark :D

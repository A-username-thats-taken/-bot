const Discord=require('discord.js');
const client=new Discord.Client();

client.on('ready', () => {
  console.log(`Currently Serving ${client.users.size} users, In ${client.guilds.size} servers.`)
  client.user.setActivity(`Serving ${client.users.size} users.`)
});


client.on('message', async msg => {
  if(msg.author.bot)return;
  if(msg.content === '>botinfo') {
    message.channel.send({embed: {
    color: #FF7000,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Info about Error Bot Renovated",
    url: "https://discordbots.org/bot/431935978291200024",
    description: "I am currently a test and tinker bot, whichs sole purpose is to display information. Soon to be a utility and Info bot!",
    fields: [{
        name: "My Creator (1.76 MHz)",
        value: "My creator is 1.76 MHz. If you want information and your bot uses ids, it is 286188938593435648. He is a beginner and tinker in node.js and often requires help. Some ideas of this bot came from others, like this embed. His discord server is [here.](https://discord.gg/UsRKQ72)"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© 1.76 MHz"
    }
  }
  
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

client.login('NDMxOTM1OTc4MjkxMjAwMDI0.Db_71g.XaIeRQ8JP_ibhr7BKLQ0LKvb0LA');

  
  // 50 line mark :D

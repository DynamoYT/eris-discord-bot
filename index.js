// Start by requiring the packages.
const Eris = require('eris')
const client = new Eris.Client('TOKEN') //Replace token with your bot token

// Variables
const prefix = '!';

// Events
client.on('ready', () => {
  // Ready event, everything in here will get triggered when bot in logged on.
  console.log('Bot is online.')
});

client.on('messageCreate', msg => {
  //This is out message event. Commands and more will go here.
  
 if(message.author.bot) return; //If the author of the message is a bot, it won't work.
 if(!message.content.startsWith(prefix)) return; // If the message doesn't start with the prefix specified in variables, it won't work.
 
 //Argument system
 let args = message.content.slice(prefix.length).trim().split(' ') // These are our argument. If a command says !say hello world, args[0] will return 'hello' and args[1] will return 'world'
 let command = args.shift().toLowerCase(); // this is out command. '!help' will return 'help'.
 if(command === 'ping') return message.channel.createMessage('Pong!');
});

client.connect() // This connects the bot to discord via the token specified when creating the client.


const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('This bot is online!')
})

client.on('message', message => {

    if (message.content === "ping") {
        message.reply("pong!");
    }

    if (message.content === 'Sexy') {
        message.channel.send("Sexy and I Know It!");
    }


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.conternt.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'anthem'){
        client.commands.get('anthem').execute(message, args)
    } else if (command == 'avatar'){
        client.commands.get('avatar').execute(message, args)
    } else if (command == 'ban'){ 
        client.commands.get('ban').execute(message, args)
    }  else if (command == 'bot'){ 
        client.commands.get('bot').execute(message, args)
    }  else if (command == 'clear'){ 
        client.commands.get('clear').execute(message, args)
    }  else if (command == 'commands'){ 
        client.commands.get('commands').execute(message, args)
    }  else if (command == 'fact'){ 
        client.commands.get('fact').execute(message, args)
    }  else if (command == 'info'){ 
        client.commands.get('info').execute(message, args)
    }  else if (command == 'kick'){ 
        client.commands.get('kick').execute(message, args)
    }  else if (command == 'mute'){ 
        client.commands.get('mute').execute(message, args)
    }  else if (command == 'unmute'){ 
        client.commands.get('unmute').execute(message, args)
    }
});

client.login(process.env.token);
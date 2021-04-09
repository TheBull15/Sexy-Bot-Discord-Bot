const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

const PREFIX = '-';

const fs = require('fs');

const createdTimestamp = ('01/13/2021')

const ServerLink = ('https://discord.gg/f93bsZxqY3')

var servers = '2'

var roles = '50'

client.commands = new Discord.Collection();

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


    let args = message.content.substring(PREFIX.length).split(" ");

    if (!message.content.startsWith(PREFIX)) return;

    switch (args[0]) {
        case 'info':
            if (message.member.roles.cache.has('798965111687217192')) {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Server Info')
                    .addField('Server Name', message.guild.name, true)
                    .addField('Server Created', createdTimestamp, true)
                    .addField('Server Owner', message.guild.owner, true)
                    .addField('Member Count', message.guild.memberCount, true)
                    .addField('Total Roles', roles, true)
                    .addField('Server Link', ServerLink, true)
                    .setColor(0xff0000)
                    .setThumbnail(client.user.displayAvatarURL())
                    .setFooter('Stay Sexy!')
                message.channel.send(embed);
            } else {
                message.channel.send("You can't use this command")
            }
            break;
        case 'bot':
            if (message.member.roles.cache.has('798965111687217192')) {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Bot Info')
                    .addField('Bot Name', client.user.username, true)
                    .addField('Servers in', servers, true)
                    .addField('Current Server', message.guild.name, true)
                    .setColor(0xff0000)
                    .setThumbnail(client.user.displayAvatarURL())
                    .setFooter('Stay Sexy!')
                message.channel.send(embed);
            } else {
                message.channel.send("You can't use this command")
            }
            break;
        case 'clear':
            if (message.member.roles.cache.has('798983712149733397')) {
                if (!args[1]) return message.reply("error, please define the number of message you wish to delete.")
                message.channel.bulkDelete(args[1]);
            } else {
                message.channel.send("You can't use this command")
            }
            break;
        case 'avatar':
            if (message.member.roles.cache.has('798965111687217192')) {
                let member = message.mentions.users.first() || message.author
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${member.username}'s avatar`)
                    .setImage(message.author.displayAvatarURL({ size: 4096 }))
                    .setColor(0xff0000)
                message.channel.send(embed);
            } else {
                message.channel.send("You can't use this command")
            }
            break;
        case 'anthem':
            if (message.member.roles.cache.has('798965111687217192')) {
                message.channel.send("https://www.youtube.com/watch?v=wyx6JDQCslE")
            } else {
                message.channel.send("You can't use this command")
            }
            break;
        case 'mute':
            if (message.member.roles.cache.has('798965109950120016')) {
                let person = message.guild.member(message.mentions.users.first() || message.guild.member(args[1]))
                if (!person) return message.reply("error, couldn't find that member!");

                let mainrole = message.guild.roles.cache.find(role => role.name === "Sexy Member");
                let muterole = message.guild.roles.cache.find(role => role.name === "Muted");

                if (!muterole) return message.reply("error, couldn't find the muted role!");

                let time = args[2];

                if (!time) {
                    return message.reply("error, you didn't specify a time!");
                }

                person.roles.remove(mainrole.id);
                person.roles.add(muterole.id);

                message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}!`);

                setTimeout(function () {
                    person.roles.add(mainrole.id);
                    person.roles.remove(muterole.id);
                    message.channel.send(`@${person.user.tag} has been unmuted!`)
                }, ms(time));
            } else {
                message.channel.send("You can't use this command")
            }
            break;
        case 'unmute':
            if (message.member.roles.cache.has('798965109950120016')) {
                let personmuted = message.guild.member(message.mentions.users.first())
                if (!personmuted) return message.reply("error, member not found!");

                let mainrole1 = message.guild.roles.cache.find(role => role.name === "Sexy Member");
                let muterole1 = message.guild.roles.cache.find(role => role.name === "Muted");

                personmuted.roles.add(mainrole1.id);
                personmuted.roles.remove(muterole1.id);
                message.channel.bulkDelete(1);
                message.channel.send(`@${personmuted.user.tag} has been unmuted!`)
            } else {
                message.channel.send("You can't use this command!")
            }
        case 'kick':
            if (message.member.roles.cache.has('798965109950120016')) {

                const user = message.mentions.users.first();

                if (user) {
                    const member = message.guild.member(user);

                    if (member) {
                        member.kick('You were bad!').then(() => {
                            message.channel.send(`@${user.tag} has been kicked!`);
                        }).catch(err => {
                            message.reply('error, I was unable to kick the memeber!');
                            console.log(err);
                        });
                    } else {
                        message.reply("error, that user isn't in this guild! ")
                    }
                } else {
                    message.reply("error, you need to specify a user!")
                }
            } else {
                message.channel.send("You can't use this command!")
            }
            break;

    }
});

client.login(process.env.token);
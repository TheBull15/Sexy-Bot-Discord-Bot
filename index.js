const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

const prefix = '-';

const fs = require('fs');

const createdTimestamp = ('01/13/2021')

const ServerLink = ('https://discord.gg/f93bsZxqY3')

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


    let args = message.content.substring(prefix.length).split(" ");

    if (!message.content.startsWith(prefix)) return;

    switch (args[0]) {
        case 'info':
            if (message.member.roles.cache.has('798965111687217192')) {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Server Info')
                    .addField('Server Name', message.guild.name, true)
                    .addField('Server Created', "01/13/2021", true)
                    .addField('Server Owner', message.guild.owner, true)
                    .addField('Member Count', message.guild.memberCount, true)
                    .addField('Total Roles', "49", true)
                    .addField('Server Link', "https://discord.gg/f93bsZxqY3", true)
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
                    .addField('Servers in', "2", true)
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
                    .setFooter('Stay Sexy!')
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
            if (message.member.roles.cache.has('798983712149733397')) {

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
        case 'ban':
            if (message.member.roles.cache.has('798983712149733397')) {
                const user = message.mentions.users.first();

                if (user) {
                    const member = message.guild.member(user);

                    if (member) {
                        member.ban({ ression: 'You were bad!' }).then(() => {
                            message.reply(`${user.tag} has been banned!`)
                        })
                    } else {
                        message.reply("That user isn't in this guild!")
                    }
                } else {
                    message.reply('You need specify a person!')
                }
            } else {
                message.channel.send("You can't use this command!")
            }
            break;
        case 'fact':
            if (message.member.roles.cache.has('798965111687217192')) {
                rndmessage(message);

                function rndmessage(message) {
                    var messages = ['Fact: Pigeon poop is the property of the British Crown.', 'Fact: Humans have jumped further than horses in the Olympics.', 'Fact: McDonald’s once made bubblegum-flavored broccoli.', 'Fact: The first oranges weren’t orange.', 'Fact: There’s only one letter that doesn’t appear in any U.S. state name.', 'Fact: A cow-bison hybrid is called a “beefalo”.', 'Fact: Scotland has 421 words for “snow”.', 'Fact: You are sexy!', 'Fact: Samsung tests phone durability with a butt-shaped robot.', 'Fact: Peanuts aren’t technically nuts.', 'Fact: Armadillo shells are bulletproof.', 'Fact: Firefighters use wetting agents to make water wetter.', 'Fact: The longest English word is 189,819 letters long.', 'Fact: Octopuses lay 56,000 eggs at a time.', 'Fact: Kleenex tissues were originally intended for gas masks.', 'Fact: Blue whales eat half a million calories in one mouthful.', 'Fact: That tiny pocket in jeans was designed to store pocket watches.', 'Fact: Most Disney characters wear gloves to keep animation simple.', 'Fact: The man with the world’s deepest voice can make sounds humans can’t hear.', 'Fact: Thanks to 3D printing, NASA can basically “email” tools to astronauts.', 'Fact: Only a quarter of the Sahara Desert is sandy.', 'Fact: Bananas grow upside-down.', 'Fact: There were active volcanoes on the moon when dinosaurs were alive.', 'Fact: You only have two body parts that never stop growing.', 'Fact: No number before 1,000 contains the letter A.', 'Fact: The # symbol isn’t officially called hashtag or pound.', 'Fact: You can thank the Greeks for calling Christmas “Xmas”.', 'Fact: Movie trailers originally played after the movie.', 'Fact: Cap’n Crunch’s full name is Horatio Magellan Crunch.', 'Fact: Giraffe tongues can be 20 inches long.', 'Fact: Giraffe tongues can be 20 inches long.', 'Fact: Europeans were scared of eating tomatoes when they were introduced.', 'Fact: Humans aren’t the only animals that dream.', 'Fact: The inventor of the microwave appliance only received $2 for his discovery.', 'Fact: The Eiffel Tower can grow more than six inches during the summer.', 'Fact: Sloths have more neck bones than giraffes.', 'Fact: Bees can fly higher than Mount Everest.', 'Fact: Ancient Egyptians used dead mice to ease toothaches.', 'Fun Fact: The Terminator script was sold for $1.', 'Fact: Onions were found in the eyes of an Egyptian mummy.', 'Fact: Abraham Lincoln was a bartender.', 'Fact: Beethoven never knew how to multiply or divide.', 'Fact: Japan released sushi-inspired KitKats.', 'Fact: An espresso maker was sent into space in 2015.', 'Fact: An employee at Pixar accidentally deleted a sequence of Toy Story 2 during production.', 'Fact: The inventor of the tricycle personally delivered two to Queen Victoria.', 'Fact: Cows don’t have upper front teeth.', 'Fact: Mercedes invented a car controlled by joystick.', 'Fact: A waffle iron inspired one of the first pairs of Nikes.', 'Fact: Baseball umpires used to sit in rocking chairs.', 'Fact: The first commercial passenger flight lasted only 23 minutes.', 'Fact: The British Empire was the largest empire in world history.', 'Fact: South American river turtles talk in their eggs.', 'Fact: The first stroller was pulled by a goat.', 'Fact: 170-year-old bottles of champagne were found at the bottom of the Baltic Sea.', 'Fact: Neil Armstrong’s hair was sold in 2004 for $3,000.', 'Fact: Irish bars used to be closed on St. Patrick’s Day.', 'Fact: Pregnancy tests date back to 1350 BCE.', 'Fact: Bananas glow blue under black lights.', 'Fact: Bees can make colored honey.', 'Fact: Adult cats are lactose intolerant.', 'Fact: Albert Einstein’s eyeballs are in New York City.', 'Fact: A one-armed player scored the winning goal in the first World Cup.', 'Fact: The world’s oldest toy is a stick.'];
                    var rnd = Math.floor(Math.random() * messages.length);

                    message.channel.send(messages[rnd]);
                }
            } else {
                message.channel.send("You can't use this command")
            }
            break;
        case 'commands':
            if (message.member.roles.cache.has('798965111687217192')) {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Bot Commands')
                    .addField('Prefix', "-")
                    .addField('Member Commands', "-commands, -info, -fact, -bot, -anthem, -avatar")
                    .addField('Staff Commands', "-mute, -ummute, -kick, -ban, -clear")
                    .setColor(0xff0000)
                    .setFooter('Stay Sexy!')
                message.channel.send(embed);
            } else {
                message.channel.send("You can't use this command")
            }
            break;
    }
});

client.login(process.env.token);
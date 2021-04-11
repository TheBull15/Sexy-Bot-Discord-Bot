const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

const PREFIX = '-';

const fs = require('fs');

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
                    .addField('Server Created', "'01/13/2021'", true)
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
                const embed = new Discord.MessageEmbed()
                .setTitle('Anthem')
                .addField("https://www.youtube.com/watch?v=wyx6JDQCslE")
                message.channel.send(embed);
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
                    var messages = ['Fun Fact: Pigeon poop is the property of the British Crown.', 'Fun Fact: Humans have jumped further than horses in the Olympics.', 'Fun Fact: McDonald’s once made bubblegum-flavored broccoli.', 'Fun Fact: The first oranges weren’t orange.', 'Fun Fact: There’s only one letter that doesn’t appear in any U.S. state name.', 'Fun Fact: A cow-bison hybrid is called a “beefalo”.', 'Fun Fact: Scotland has 421 words for “snow”.', 'You are sexy!', 'Fun Fact: Samsung tests phone durability with a butt-shaped robot.', 'Fun Fact: Peanuts aren’t technically nuts.', 'Fun Fact: Armadillo shells are bulletproof.', 'Fun Fact: Firefighters use wetting agents to make water wetter.', 'Fun Fact: The longest English word is 189,819 letters long.', 'Fun Fact: Octopuses lay 56,000 eggs at a time.', 'Fun Fact: Kleenex tissues were originally intended for gas masks.', 'Fun Fact: Blue whales eat half a million calories in one mouthful.', 'Fun Fact: That tiny pocket in jeans was designed to store pocket watches.', 'Fun Fact: Most Disney characters wear gloves to keep animation simple.', 'Fun Fact: The man with the world’s deepest voice can make sounds humans can’t hear.', 'Fun Fact: Thanks to 3D printing, NASA can basically “email” tools to astronauts.', 'Fun Fact: Only a quarter of the Sahara Desert is sandy.', 'Fun Fact: Bananas grow upside-down.', 'Fun Fact: There were active volcanoes on the moon when dinosaurs were alive.', 'Fun Fact: You only have two body parts that never stop growing.', 'Fun Fact: No number before 1,000 contains the letter A.', 'Fun Fact: The # symbol isn’t officially called hashtag or pound.', 'Fun Fact: You can thank the Greeks for calling Christmas “Xmas”.', 'Fun Fact: Movie trailers originally played after the movie.', 'Fun Fact: Cap’n Crunch’s full name is Horatio Magellan Crunch.', 'Fun Fact: Giraffe tongues can be 20 inches long.', 'Fun Fact: Giraffe tongues can be 20 inches long.', 'Fun Fact: Europeans were scared of eating tomatoes when they were introduced.', 'Fun Fact: Humans aren’t the only animals that dream.', 'Fun Fact: The inventor of the microwave appliance only received $2 for his discovery.', 'Fun Fact: The Eiffel Tower can grow more than six inches during the summer.', 'Fun Fact: Sloths have more neck bones than giraffes.', 'Fun Fact: Bees can fly higher than Mount Everest.', 'Fun Fact: Ancient Egyptians used dead mice to ease toothaches.', 'Fun Fact: The Terminator script was sold for $1.', 'Fun Fact: Onions were found in the eyes of an Egyptian mummy.', 'Fun Fact: Abraham Lincoln was a bartender.', 'Fun Fact: Beethoven never knew how to multiply or divide.', 'Fun Fact: Japan released sushi-inspired KitKats.', 'Fun Fact: An espresso maker was sent into space in 2015.', 'Fun Fact: An employee at Pixar accidentally deleted a sequence of Toy Story 2 during production.', 'Fun Fact: The inventor of the tricycle personally delivered two to Queen Victoria.', 'Fun Fact: Cows don’t have upper front teeth.', 'Fun Fact: Mercedes invented a car controlled by joystick.', 'Fun Fact: A waffle iron inspired one of the first pairs of Nikes.', 'Fun Fact: Baseball umpires used to sit in rocking chairs.', 'Fun Fact: The first commercial passenger flight lasted only 23 minutes.', 'Fun Fact: The British Empire was the largest empire in world history.', 'Fun Fact: South American river turtles talk in their eggs.', 'Fun Fact: The first stroller was pulled by a goat.', 'Fun Fact: 170-year-old bottles of champagne were found at the bottom of the Baltic Sea.', 'Fun Fact: Neil Armstrong’s hair was sold in 2004 for $3,000.', 'Fun Fact: Irish bars used to be closed on St. Patrick’s Day.', 'Fun Fact: Pregnancy tests date back to 1350 BCE.', 'Fun Fact: Bananas glow blue under black lights.', 'Fun Fact: Bees can make colored honey.', 'Fun Fact: Adult cats are lactose intolerant.', 'Fun Fact: Albert Einstein’s eyeballs are in New York City.', 'Fun Fact: A one-armed player scored the winning goal in the first World Cup.', 'Fun Fact: The world’s oldest toy is a stick.'];
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
                    .addField('Prefix', PREFIX)
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
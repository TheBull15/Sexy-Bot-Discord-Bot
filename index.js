const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

client.on('ready', () => {
    console.log('This bot is online!')
})

const WelcomeChannelID = '801604160641302539'
const RuleChannelID = '826221944554651688'
const TourneyAnnouncementsID = '807835906747924530'

client.on('guildMemberAdd', (member) => {
    console.log(member)

    const message = `Hey <@${member.id
        }>, welcome to the Sexy | 3v3! Hope to see you participate in our Tournament. If you have any questions or concerns feel free to ping a staff member. Also, please go check out ${member.guild.channels.cache
            .get(RuleChannelID)
            .toString()}, and for more information about the tournament go check out ${member.guild.channels.cache
                .get(TourneyAnnouncementsID)
                .toString()}. Thanks for reading, enjoy!`

    const channel = member.guild.channels.cache.get(WelcomeChannelID)
    channel.send(message)
})

client.on('guildMemberRemove', (member) => {
    console.log(member)

    const message = `<@${member.id
        }>, just left the server. That's a bummer.🙁`
    const channel = member.guild.channels.cache.get(WelcomeChannelID)
    channel.send(message)
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
        case 'sexy-pete':
            if (message.member.roles.cache.has('798965111687217192')) {
        const embed = new Discord.MessageEmbed()
                    .setTitle('Sexy Pete')
                    .setImage('https://media.discordapp.net/attachments/843137190058000385/845859033780715580/20210519_160413.jpg?width=506&height=675')
                    .addField("Pete's Twitch", "[Twitch](https://www.twitch.tv/killpetestrat)", true)
                    .addField("Pete's YouTube", "[YouTube](https://www.youtube.com/channel/UCm2FjVzc3UDIIC21sHLC4MQ)", true)
                    .setColor(0xff0000)
                    .setFooter("Stay Sexy!")
                message.channel.send(embed);
            } else {
                message.channel.send("You can't use this command!")
            }
            break;
        case 'win':
            if (message.member.roles.cache.has('798965111687217192')) {
                message.channel.send("That was a sexy win!")
            } else {
                message.channel.send("You can't use this command!")
            }
            break;
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
                message.channel.send("You can't use this command!")
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
                message.channel.send("You can't use this command!")
            }
            break;
        case 'clear':
            if (message.member.roles.cache.has('798983712149733397')) {
                if (!args[1]) return message.reply("error, please define the number of message you wish to delete.")
                message.channel.bulkDelete(args[1]);
            } else {
                message.channel.send("You can't use this command!")
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
                message.channel.send("You can't use this command!")
            }
            break;
        case 'anthem':
            if (message.member.roles.cache.has('798965111687217192')) {
                message.channel.send("https://www.youtube.com/watch?v=wyx6JDQCslE")
            } else {
                message.channel.send("You can't use this command!")
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
                message.channel.send("You can't use this command!")
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
                    var messages = ["Jupiter's red spot is getting taller and smaller at the same time.",'The U.S. almost went to war with Canada over a pig.','You can learn the High Valyrian language from Game of Thrones with an online course.',"The Twitter bird's official name Is Larry.",'America accidentally dropped an atom bomb on South Carolina in 1958.','The Silverback gorilla can lift almost a literal ton.','The cast of Friends still earns around $20 million each year.','One man once survived two atomic bombs.','You can sneeze faster than a cheetah can run.','Some planets produce diamond rain.',"Star Trek's Scotty stormed the beach at Normandy.",'Napoleon was once attacked by thousands of rabbits.','The Australian government banned the word "mate" for a day.','The legend of the Loch Ness Monster goes back nearly 1,500 years.','Humans are just one of the estimated 8.7 million species on Earth.','Dolphins have been trained to be used in wars.',"There's a decorated war hero dog.","A dozen bodies were once found in Benjamin Franklin's basement.",'"E" is the most common letter and appears in 11 percent of all english words.','The unicorn is the national animal of Scotland.','The first computer was invented in the 1940s.','The English word with the most definitions is "set."','Marie Curie is the only person to earn a Nobel prize in two different sciences.','Cotton candy was invented by a dentist.','You lose up to 30 percent of your taste buds during flight.','The wood frog can hold its pee for up to eight months.','Humans are the only animals that blush.','The moon has moonquakes.','Some sea snakes can breathe through their skin.','The heads on Easter Island have bodies.',"The world's smallest reptile was first reported in 2021.",'Hair and nails grow faster during pregnancy.','The world wastes about 1 billion metric tons of food each year.','The first person convicted of speeding was going eight mph.','More human twins are being born now than ever before.','Pigeon poop is the property of the British Crown.', 'Humans have jumped further than horses in the Olympics.', 'McDonald’s once made bubblegum-flavored broccoli.', 'The first oranges weren’t orange.', 'There’s only one letter that doesn’t appear in any U.S. state name.', 'A cow-bison hybrid is called a “beefalo”.', 'Scotland has 421 words for “snow”.', 'You are sexy!', 'Samsung tests phone durability with a butt-shaped robot.', 'Peanuts aren’t technically nuts.', 'Armadillo shells are bulletproof.', 'Firefighters use wetting agents to make water wetter.', 'The longest English word is 189,819 letters long.', 'Octopuses lay 56,000 eggs at a time.', 'Kleenex tissues were originally intended for gas masks.', 'Blue whales eat half a million calories in one mouthful.', 'That tiny pocket in jeans was designed to store pocket watches.', 'Most Disney characters wear gloves to keep animation simple.', 'The man with the world’s deepest voice can make sounds humans can’t hear.', 'Thanks to 3D printing, NASA can basically “email” tools to astronauts.', 'Only a quarter of the Sahara Desert is sandy.', 'Bananas grow upside-down.', 'There were active volcanoes on the moon when dinosaurs were alive.', 'You only have two body parts that never stop growing.', 'No number before 1,000 contains the letter A.', 'The # symbol isn’t officially called hashtag or pound.', 'You can thank the Greeks for calling Christmas “Xmas”.', 'Movie trailers originally played after the movie.', 'Cap’n Crunch’s full name is Horatio Magellan Crunch.', 'Giraffe tongues can be 20 inches long.', 'Giraffe tongues can be 20 inches long.', 'Europeans were scared of eating tomatoes when they were introduced.', 'Humans aren’t the only animals that dream.', 'The inventor of the microwave appliance only received $2 for his discovery.', 'The Eiffel Tower can grow more than six inches during the summer.', 'Sloths have more neck bones than giraffes.', 'Bees can fly higher than Mount Everest.', 'Ancient Egyptians used dead mice to ease toothaches.', 'Fun The Terminator script was sold for $1.', 'Onions were found in the eyes of an Egyptian mummy.', 'Abraham Lincoln was a bartender.', 'Beethoven never knew how to multiply or divide.', 'Japan released sushi-inspired KitKats.', 'An espresso maker was sent into space in 2015.', 'An employee at Pixar accidentally deleted a sequence of Toy Story 2 during production.', 'The inventor of the tricycle personally delivered two to Queen Victoria.', 'Cows don’t have upper front teeth.', 'Mercedes invented a car controlled by joystick.', 'A waffle iron inspired one of the first pairs of Nikes.', 'Baseball umpires used to sit in rocking chairs.', 'The first commercial passenger flight lasted only 23 minutes.', 'The British Empire was the largest empire in world history.', 'South American river turtles talk in their eggs.', 'The first stroller was pulled by a goat.', '170-year-old bottles of champagne were found at the bottom of the Baltic Sea.', 'Neil Armstrong’s hair was sold in 2004 for $3,000.', 'Irish bars used to be closed on St. Patrick’s Day.', 'Pregnancy tests date back to 1350 BCE.', 'Bananas glow blue under black lights.', 'Bees can make colored honey.', 'Adult cats are lactose intolerant.', 'Albert Einstein’s eyeballs are in New York City.', 'A one-armed player scored the winning goal in the first World Cup.', 'The world’s oldest toy is a stick.'];
                    var rnd = Math.floor(Math.random() * messages.length);

                    message.channel.send(messages[rnd]);
                }
            } else {
                message.channel.send("You can't use this command!")
            }
            break;
        case 'commands':
            if (message.member.roles.cache.has('798965111687217192')) {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Bot Commands')
                    .addField('Prefix', "-")
                    .addField('Member Commands', "-win, -commands, -info, -fact, -bot, -anthem, -avatar, -sexy-pete")
                    .addField('Staff Commands', "-mute, -ummute, -kick, -ban, -clear")
                    .setColor(0xff0000)
                    .setFooter('Stay Sexy!')
                message.channel.send(embed);
            } else {
                message.channel.send("You can't use this command!")
            }
            break;

    }
});

client.login(process.env.token);
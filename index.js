const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

const prefix = '-';

const fs = require('fs');
const { generateKey } = require('crypto');

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

    var messages = ["Jupiter's red spot is getting taller and smaller at the same time.", 'The U.S. almost went to war with Canada over a pig.', 'You can learn the High Valyrian language from Game of Thrones with an online course.', "The Twitter bird's official name Is Larry.", 'America accidentally dropped an atom bomb on South Carolina in 1958.', 'The Silverback gorilla can lift almost a literal ton.', 'The cast of Friends still earns around $20 million each year.', 'One man once survived two atomic bombs.', 'You can sneeze faster than a cheetah can run.', 'Some planets produce diamond rain.', "Star Trek's Scotty stormed the beach at Normandy.", 'Napoleon was once attacked by thousands of rabbits.', 'The Australian government banned the word "mate" for a day.', 'The legend of the Loch Ness Monster goes back nearly 1,500 years.', 'Humans are just one of the estimated 8.7 million species on Earth.', 'Dolphins have been trained to be used in wars.', "There's a decorated war hero dog.", "A dozen bodies were once found in Benjamin Franklin's basement.", '"E" is the most common letter and appears in 11 percent of all english words.', 'The unicorn is the national animal of Scotland.', 'The first computer was invented in the 1940s.', 'The English word with the most definitions is "set."', 'Marie Curie is the only person to earn a Nobel prize in two different sciences.', 'Cotton candy was invented by a dentist.', 'You lose up to 30 percent of your taste buds during flight.', 'The wood frog can hold its pee for up to eight months.', 'Humans are the only animals that blush.', 'The moon has moonquakes.', 'Some sea snakes can breathe through their skin.', 'The heads on Easter Island have bodies.', "The world's smallest reptile was first reported in 2021.", 'Hair and nails grow faster during pregnancy.', 'The world wastes about 1 billion metric tons of food each year.', 'The first person convicted of speeding was going eight mph.', 'More human twins are being born now than ever before.', 'Pigeon poop is the property of the British Crown.', 'Humans have jumped further than horses in the Olympics.', 'McDonald’s once made bubblegum-flavored broccoli.', 'The first oranges weren’t orange.', 'There’s only one letter that doesn’t appear in any U.S. state name.', 'A cow-bison hybrid is called a “beefalo”.', 'Scotland has 421 words for “snow”.', 'Samsung tests phone durability with a butt-shaped robot.', 'Peanuts aren’t technically nuts.', "You're Sexy!"];
    setInterval(function () {
        var rnd = Math.floor(Math.random() * messages.length);
        var GeneralChannel = client.channels.cache.find(channel => channel.id === '959277428025483266');
        GeneralChannel.send(messages[rnd])
    }, 1000) // Changed to 1s for testing

    let args = message.content.substring(prefix.length).split(" ");

    if (!message.content.startsWith(prefix)) return;

    switch (args[0]) {
        case 'random-map':
            rndmessage(message);

            function rndmessage(message) {
                var messages = ["Ibailand", "Las Vegas, Nevada", "Simple World", "France", "New York", "Boston", "River Town", "Supermax Prison", "Jules Verne's Mysterious Island", "Ottoman Emipre", "Classic", "Earth 2209 A.D", "Central America", "Conwy Castle", "Castle", "Seaport", "Mont Saint-Michel", "Iceland", "Alcatraz", "Lost Tenple", "The Younger Scrolls", "Pangaea", "Europe", "Arkeanos", "Forsaken Lands", "Britannia [Advanced]", "The Priate's Bay", "Mall of the Dead", "Qing Dynasty", "Canada", "Africa", "Artic", "Enchanted Lands", "Britannia", "Los Angles", "28 Turns Later", "Italy", "Modern Spain", "Classic Frozen", "Moscow [Advanced]", "Skull & Crossbones", "Roman Emipre", "River Town [Advanced]", "Asia 1800s", "Moscow", "Koenigsberg", "Reverse World", "Brazil", "Deutschland!", "United States", "World Conquest", "Russia 2010", "Lübeck", "Japan", "Turkey", "New Zealand and Austalia", "Grip of the North", "Himeji Castle", "Red Sands Fort", "Dracula's Castle", "Atlantis", "Troy", "Nan Madol", "Machu Pichu", "Europe Advanced", "Russia 2010 Advanced", "Brazil Advanced", "Canada Advanced", "Command Base C1X", "Lunar Mining Facility", "Spaceport Sigma", "[REDACTED", "Overworld", "Seagrog's Fortress", "Trigon's Labyrinth", "Moonstone Forest"];
                var rnd = Math.floor(Math.random() * messages.length);

                message.channel.send(messages[rnd]);
            }
            break;
        case 'sexy-pete':
            const embed = new Discord.MessageEmbed()
                .setTitle('Sexy Pete')
                .setImage('https://media.discordapp.net/attachments/843137190058000385/845859033780715580/20210519_160413.jpg?width=506&height=675')
                .addField("Pete's Twitch", "[Click Here!](https://www.twitch.tv/killpetestrat)", true)
                .addField("Pete's YouTube", "[Click Here!](https://www.youtube.com/channel/UCm2FjVzc3UDIIC21sHLC4MQ)", true)
                .setColor(0xff0000)
                .setFooter("Stay Sexy!")
            message.channel.send(embed);
            break;
        case 'win':
            message.channel.send("That was a sexy win!")
            break;
        case 'avatar':
            let member = message.mentions.users.first() || message.author
            const embed1 = new Discord.MessageEmbed()
                .setTitle(`${member.username}'s avatar`)
                .setImage(message.author.displayAvatarURL({ size: 4096 }))
                .setColor(0xff0000)
                .setFooter('Stay Risky!')
            message.channel.send(embed1);
            break;
        case 'anthem':
            message.channel.send("https://www.youtube.com/watch?v=wyx6JDQCslE")
            break;
        case 'bot':
            const embed2 = new Discord.MessageEmbed()
                .setTitle('Bot Info')
                .addField('Bot Name', client.user.username, true)
                .addField('Servers in', "1", true)
                .addField('Current Server', message.guild.name, true)
                .setColor(0xff0000)
                .setThumbnail(client.user.displayAvatarURL())
                .setFooter('Stay Risky!')
            message.channel.send(embed2);
            break;
        case 'info':
            const embed3 = new Discord.MessageEmbed()
                .setTitle('Server Info')
                .addField('Server Name', message.guild.name, true)
                .addField('Server Created', "31/05/2020", true)
                .addField('Server Owner', message.guild.owner, true)
                .addField('Member Count', message.guild.memberCount, true)
                .addField('Total Roles', "54", true)
                .addField('Server Link', "https://discord.gg/uDmEbncteS", true)
                .setColor(0xff0000)
                .setThumbnail(client.user.displayAvatarURL())
                .setFooter('Stay Risky!')
            message.channel.send(embed3);
            break;
        case 'commands':
            const embed4 = new Discord.MessageEmbed()
                .setTitle('Bot Commands')
                .addField('Prefix', "-")
                .addField('Commands', "-win, -random-map, -commands, -info, -fact, -bot, -anthem, -avatar, -sexy-pete")
                .setColor(0xff0000)
                .setFooter('Stay Risky!')
            message.channel.send(embed4);
            break;

    }
});

client.login(process.env.token);
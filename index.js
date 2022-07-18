const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

const prefix = '-';

const fs = require('fs');
const { generateKey } = require('crypto');

client.commands = new Discord.Collection();

const messages = [`More human twins are being born now than ever before.`, `A narwhal's tusk reveals its past living conditions.`, `The first person convicted of speeding was going eight mph.`, `"New car smell" is the scent of dozens of chemicals.`, `The world wastes about 1 billion metric tons of food each year.`, `The severed head of a sea slug can grow a whole new body.`, `Hair and nails grow faster during pregnancy.`, `The world's smallest reptile was first reported in 2021.`, `Many feet bones don't harden until you're an adult.`, `Some sea snakes can breathe through their skin.`, `The heads on Easter Island have bodies.`, `Goosebumps are meant to ward off predators.`, `There's no such thing as "pear cider."`, `Pineapple works as a natural meat tenderizer.`, `Humans are the only animals that blush.`, `The feeling of getting lost inside a mall is known as the Gruen transfer.`, `The wood frog can hold its pee for up to eight months.`, `The hottest spot on the planet is in Libya.`, `You lose up to 30 percent of your taste buds during flight.`, `Your nostrils work one at a time.`, `Only two mammals like spicy food: humans and the tree shrew.`, `A chef's toque contains 100 folds.`, `Rabbits can't puke.`, `The "M's" in M&Ms stand for "Mars" and "Murrie."`, `The human body literally glows.`, `Copper door knobs are self-disinfecting.`, `Marie Curie is the only person to earn a Nobel prize in two different sciences.`, `Fingernails don't grow after you die.`, `day 3`, `day 2`];
    var index = 0;

client.on('ready', () => {
    console.log('This bot is online!')

    const channel = client.channels.cache.find(channel => channel.id === '959277428025483266');

    setInterval(() => {
      channel.send({ content: messages[index] });
      index = index > messages.length - 2 ? 0 : index + 1;
    }, 1000 * 60 * 60 * 24); // in milliseconds
  
})

client.on('message', message => {

    if (message.content === "ping") {
        message.reply("pong!");
    }

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
        case 'avatar':
            let member = message.mentions.users.first() || message.author
            const embed1 = new Discord.MessageEmbed()
                .setTitle(`${member.username}'s avatar`)
                .setImage(message.author.displayAvatarURL({ size: 4096 }))
                .setColor(0xff0000)
                .setFooter('Stay Risky!')
            message.channel.send(embed1);
            break;
        case 'commands':
            const embed4 = new Discord.MessageEmbed()
                .setTitle('Bot Commands')
                .addField('Prefix', "-")
                .addField('Commands', " -commands, random-map, -avatar")
                .setColor(0xff0000)
                .setFooter('Stay Risky!')
            message.channel.send(embed4);
            break;

    }
});

client.login(process.env.token);
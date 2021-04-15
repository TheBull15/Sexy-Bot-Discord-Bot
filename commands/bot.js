module.exports = {
    name: 'bot',
    description: "This command shows the bot info.",
    execute(message, args, Discord) {
        if (message.member.roles.cache.has('798965111687217192')) {
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
                .setTitle('Bot Info')
                .addField('Bot Name', client.user.username, true)
                .addField('Servers in', "2", true)
                .addField('Current Server', message.guild.name, true)
                .setColor(0xff0000)
                .setThumbnail(client.user.displayAvatarURL())
                .setFooter('Stay Sexy!')
            message.channel.send(newEmbed);
        } else {
            message.channel.send("You can't use this command")
        }
    }
}
module.exports = {
    name: 'commands',
    description: "This command shows the bot commands.",
    execute(message, args, Discord) {
        if (message.member.roles.cache.has('798965111687217192')) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Bot Commands')
                .addField('Prefix', PREFIX)
                .addField('Member Commands', "-commands, -info, -fact, -bot, -anthem, -avatar")
                .addField('Staff Commands', "-mute, -ummute, -kick, -ban, -clear")
                .setColor(0xff0000)
                .setFooter('Stay Sexy!')
                message.channel.send(newEmbed);
        } else {
            message.channel.send("You can't use this command")
        }
    }
}
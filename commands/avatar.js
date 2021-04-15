module.exports = {
    name: 'avatar',
    description: "This command shows the memeber's avatar.",
    execute(message, args) {
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
    }
}
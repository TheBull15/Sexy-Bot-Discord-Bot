const client = new Discord.Client();
module.exports = {
    name: 'info',
    description: "This command shows the server info.",
    execute(message, args, Discord) {
        if (message.member.roles.cache.has('798965111687217192')) {
            const newEmbed = new Discord.MessageEmbed()
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
                message.channel.send(newEmbed);
        } else {
            message.channel.send("You can't use this command")
        }
        
    }
}
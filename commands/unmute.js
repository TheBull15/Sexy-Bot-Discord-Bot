module.exports = {
    name: 'unmute',
    description: "This command unmutes members.",
    execute(message, args, Discord) {
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
    }
}
module.exports = {
    name: 'mute',
    description: "This command mutes users.",
    execute(message, args) {
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
    }
}
module.exports = {
    name: 'ban',
    description: "This command bans memebers from the server.",
    execute(message, args) {
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
    }
}
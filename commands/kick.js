module.exports = {
    name: 'info',
    description: "This command shows the server info.",
    execute(message, args) {
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
    }
}
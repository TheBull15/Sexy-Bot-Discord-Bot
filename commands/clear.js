module.exports = {
    name: 'clear',
    description: "This command deletes messages.",
    execute(message, args, Discord) {
        if (message.member.roles.cache.has('798983712149733397')) {
            if (!args[1]) return message.reply("error, please define the number of message you wish to delete.")
            message.channel.bulkDelete(args[1]);
        } else {
            message.channel.send("You can't use this command")
        }
    }
}
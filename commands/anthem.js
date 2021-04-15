module.exports = {
    name: 'anthem',
    description: "This command plays the anthem of the Sexy Nation.",
    execute(message, args) {
        if (message.member.roles.cache.has('798965111687217192')) {
            message.channel.send("https://www.youtube.com/watch?v=wyx6JDQCslE")
        } else {
            message.channel.send("You can't use this command")
        }
    }
}
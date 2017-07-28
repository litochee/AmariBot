exports.run = (client, message, args, sql, Discord) => {
var embed = new Discord.RichEmbed()
    .setTitle("Amari Bot")
    .setDescription("Thank you for choosing AmariBot! We are still in production so please report any bugs. [**Click Here**](https://discordapp.com/oauth2/authorize?client_id=339254240012664832&scope=bot&permissions=268954688) to add to your server.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    message.channel.send({embed: embed});
}
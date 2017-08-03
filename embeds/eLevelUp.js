module.exports.levelUpEmbed = function(client, message, Discord, level) {
    var embed = new Discord.RichEmbed()
        .setTitle(message.author.username)
        .setDescription(`**CONGRATS**\nYou are now level **${level}**!!!`)
        .setColor(0x00AE86)
        .setThumbnail(message.author.displayAvatarURL);

    message.channel.send({embed: embed});

}
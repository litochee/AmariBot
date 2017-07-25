module.exports.profileEmbed = function(client, message, user, iUser, Discord) {
    var embed = new Discord.RichEmbed()
        .setTitle(user.username)
        .setDescription(`**Level:** ${iUser.uLevel} \n**Exp:** ${iUser.globalPoints} / ${iUser.nextPL}\n**Rank:** ${iUser.globalRank}`)
        .setColor(0x00AE86)
        .setThumbnail(user.displayAvatarURL);

    message.channel.send({embed: embed});

}
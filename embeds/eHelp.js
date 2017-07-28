module.exports.helpEmbed = function(client, message, Discord) {
  var embed = new Discord.RichEmbed()
    .setTitle("Amari Bot")
    .setDescription("List of commands for Amari Bot.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Commands", `**:?leaderboard**
**:?rank**
**:?rank** \`\`@User\`\`
**:?help**
**:?help** \`\`COMMAND\`\`
**:?invite**
**:?bug** \`\`bug information\`\`` ,true)
    .setFooter("©Litochee", `${client.user.displayAvatarURL}`)
    message.channel.send({embed: embed});
}
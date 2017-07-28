module.exports.spHEmbed = function(client, message, Discord, spCmd) {
  var embed = new Discord.RichEmbed()
    .setTitle(spCmd.command)
    .setDescription(spCmd.description)
    .setColor(0x00AE86)
  message.channel.send({embed: embed});
}
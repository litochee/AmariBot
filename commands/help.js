const hEmbed = require('./../embeds/eHelp.js');
exports.run = (client, message, args, sql, Discord) =>{
  hEmbed.helpEmbed(client, message, Discord);
}
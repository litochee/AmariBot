const config = require('./../config.json');
const moment = require('moment');
exports.run = (client, message, args, sql, Discord) => {
  let tDate = moment().format('LLLL');
  client.users.get(config.ownerID).send(`**Username**: ${message.author.username}\n**Bug**: \`\`\`${args.join(" ")}\`\`\`\n**Server**: ${message.guild.name}\n**Date**: ${tDate}`);
}
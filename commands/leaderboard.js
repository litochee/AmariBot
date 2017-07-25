const lEmbed = require('./../embeds/eLeaderboard.js');
exports.run = (client, message, args, sql, Discord) => {
    lEmbed.leaderboardEmbed(client, message, sql, Discord);
}

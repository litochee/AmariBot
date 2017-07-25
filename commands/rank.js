const pEmbed = require('./../embeds/eProfile.js');
exports.run = (client, message, args, sql, Discord) =>{
    const member = message.guild.member(message.mentions.users.first());

    if(!member){
        sql.get(`SELECT * FROM userScores WHERE guildID = '${message.guild.id}' AND userID = '${message.author.id}'`).then(iUser =>{ //gets user row of whos requesting
            if(!iUser){
                message.reply("Sorry you don't have any points. Start chatting to earn them!");
            }else{
                pEmbed.profileEmbed(client, message, message.author, iUser, Discord);
            }
        })
    }else{
        sql.get(`SELECT * FROM userScores WHERE guildID = '${message.guild.id}' AND userID = '${member.id}'`).then(iUser =>{
            if(!iUser){
                message.reply("Sorry they don't have any points. Have them start chatting to earn them!");
            }else{
                pEmbed.profileEmbed(client, message, member.user, iUser, Discord);
            }
        })
    }
}
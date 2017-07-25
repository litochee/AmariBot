const { version } = require("discord.js");
require("moment-duration-format");
const moment = require("moment");
exports.run = (client, message, args, sql) =>{
    sql.get(`SELECT * FROM userScores WHERE guildID = '${message.guild.id}' AND userID = '${message.author.id}'`).then(iUser =>{ //gets user row of whos requesting
        if(iUser.AccessLevel >= 3){
            const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            message.channel.send(`= STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Uptime     :: ${duration}
• Users      :: ${client.users.size.toLocaleString()}
• Servers    :: ${client.guilds.size.toLocaleString()}
• Channels   :: ${client.channels.size.toLocaleString()}
• Node       :: ${process.version}`, {code: "asciidoc"});
        }else{
            message.reply("Sorry you don't have permission");
        }
    })
}
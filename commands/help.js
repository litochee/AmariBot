const hEmbed = require('./../embeds/eHelp.js');
const eCEmbed = require('./../embeds/eCHelp.js');
exports.run = (client, message, args, sql, Discord) =>{
  var cHelp = {command:"help", description:"In this command you can see all the of the commands and you can see specific information about a command by doing ``:?help rank``"};
  var cRank = {command:"rank", description:"With rank you can see what your rank in the leaderboards are. You can also see other peoples rank with ``:?rank @user``"};
  var cInvite = {command:"invite", description:"When you type in :?invite you will get a prompt with the invite link to get Amari Bot on your server!"};
  var cBug = {command:"bug", description:"If you find a bug please report it with the ``:?bug <insert issue here.>`` command."};
  var cLeaderboard = {command: "leaderboard", description:"View the leaderboards for your current server and see who is top!"};
  let mHelp = args[0];
  if (mHelp == "leaderboard"){
    eCEmbed.spHEmbed(client, message, Discord, cLeaderboard)
  }else if(mHelp == "help"){
    eCEmbed.spHEmbed(client, message, Discord, cHelp)
  }else if(mHelp == "rank"){
    eCEmbed.spHEmbed(client, message, Discord, cRank)
  }else if(mHelp == "bug"){
    eCEmbed.spHEmbed(client, message, Discord, cBug)
  }else if(mHelp == "invite"){
    eCEmbed.spHEmbed(client, message, Discord, cInvite)
  }else{
    hEmbed.helpEmbed(client, message, Discord);
  }

}
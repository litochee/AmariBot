const hEmbed = require('./../embeds/eHelp.js');
const eCEmbed = require('./../embeds/eCHelp.js');
exports.run = (client, message, args, sql, Discord) =>{
  var cHelp = {command:"help", description:"In this command you can see all the of the commands and you can see specific information about a command by doing ``:?help rank``"};
  var cRank = {command:"rank", description:"With rank you can see what your rank in the leaderboards are. You can also see other peoples rank with ``:?rank @user``"};
  var cInvite = {command:"invite", description:"When you type in :?invite you will get a prompt with the invite link to get Amari Bot on your server!"};
  var cBug = {command:"bug", description:"If you find a bug please report it with the ``:?bug <insert issue here.>`` command."};
  var cLeaderboard = {command: "leaderboard", description:"View the leaderboards for your current server and see who is top!"};
  var crLevel = {command: "rlevel", description: "Add/Remove roles that users gain at a certain level. Make sure that there is a role named **AmariMod** (only people with this role can add roles).\n\nTo **add** a role use: \`\`:?rlevel add level RoleName\`\` \nTo **remove** a role use: \`\`:?rlevel remove RoleName\`\`"};
  var pBlackList = {command: "blacklist", description: "Add/Remove blacklists on roles (stops users in certain roles from getting points), if user has a certain role that is added to the blacklist they won't get exp. Example: ``:?blacklist add Developer``. People with the ``Developer`` role will NOT get points."};
  var cSupport = {command: "support", description: "Type :?support to get an invite to the AmariBot support server."}
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
  }else if(mHelp == "rlevel"){
    eCEmbed.spHEmbed(client, message, Discord, crLevel)
  }else if(mHelp == "blacklist"){
    eCEmbed.spHEmbed(client, message, Discord, pBlackList);
  }else{
    hEmbed.helpEmbed(client, message, Discord);
  }

}
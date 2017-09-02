exports.run = (client, message, args, sql, Discord) => {
  let uAccess = message.guild.roles.find("name", "AmariMod");
  if(!uAccess){
    message.reply("Please make a role named \"AmariMod\" and assign it to yourself to be able to use this command.");
  }else{
    if(message.member.roles.has(uAccess.id)){
        let condition = args[0];
        if (condition == "add"){
            let pRole = args.splice(1);
            let bRole = message.guild.roles.find("name", pRole.join(" "));
            if (!bRole){
                message.reply(`No role found ${pRole.join(" ")}. Remember it is case sensitive.`);
            }else{
                sql.run(`INSERT INTO bListRoles (guildID, roleName, roleID) VALUES (?,?,?)`, [message.guild.id, bRole.name, bRole.id]);
                message.reply(`${pRole.join(" ")} has been added to the points system blacklist.`);
            }
        }else if(condition == "remove"){
            let pRole = args.splice(1);
            let cRole = message.guild.roles.find("name", pRole.join(" "));
            if(!cRole){
                message.reply(`No role found ${pRole.join(" ")}. Remember it is case sensitive.`);
            }else{
                sql.run(`DELETE FROM bListRoles WHERE guildID = ${message.guild.id} AND roleID = ${cRole.id}`);
                message.reply(`${cRole.name} has been removed from the blacklist.`);
            }
        }else{
            message.reply("Please use the conditions add or remove.")
        }
    }else{
        message.reply("Sorry you don't have access to this command.");
    }
  }//uAccess not made else
}
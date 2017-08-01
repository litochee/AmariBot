exports.run = (client, message, args, sql) =>{
  let uRole = message.guild.roles.find("name", "AmariMod");
  if(!uRole){
    message.reply("Please read ``:?help rlevel`` for more information on how to use it.")
  }else{
    if(message.member.roles.has(uRole.id)){
      let condition = args[0];
      if (condition == "add"){
        let alvl = args[1]; //get's the level
        let pRole = args.splice(2); //only get's the name of the role
        let nRole = message.guild.roles.find("name", pRole.join(" ")); //checks for the role

        if (!nRole){
          message.reply(`no role found ${pRole.join(" ")}`);
        }else{
          sql.get(`SELECT * FROM levelRoles WHERE guildID = ${message.guild.id} AND roleID = ${nRole.id}`).then(oRole =>{
            if (!oRole){
              sql.run(`INSERT INTO levelRoles (guildID, roleID, roleName, level) VALUES (?,?,?,?)`,[message.guild.id, nRole.id, pRole.join(" "), alvl]);
              message.reply(`${pRole} has been set for level ${alvl}.`)
            }else{
              sql.run(`UPDATE levelRoles SET guildID = ${message.guild.id} AND roleID = ${nRole.id} AND roleName = ${pRole.join(" ")} AND level = ${alvl} WHERE guildID='${message.guild.id}' AND level='${alvl}'`);
              message.reply(`${pRole} has been updated for level ${alvl}.`)
            }
          }).catch(() =>{
            message.reply("need to create table");
          })
        }
      }else if(condition == "remove"){
        let pRole = args.splice(1);
        let nRole = message.guild.roles.find("name", pRole.join(" ")); //checks for the role
        if(!nRole){
          message.reply(`There is no role named ${pRole.join(" ")}.`);
        }else{
          sql.run(`DELETE FROM levelRoles WHERE guildID = ${message.guild.id} AND roleID = ${nRole.id}`);
          message.reply(`${pRole.join(" ")} has been removed from rlevel.`);
        }
      }else{
        message.reply("Please use the rlevel add or remove to remove or add a role.");
      }
    }else{
      message.reply("Sorry you don't have access.");
    }
  }
}

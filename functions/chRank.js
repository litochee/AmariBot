module.exports.levelRank = function(message, sql) {
sql.get(`SELECT * FROM userScores WHERE guildID='${message.guild.id}' AND userID='${message.author.id}'`).then(rlch =>{
    sql.get(`SELECT * FROM levelRoles WHERE guildID='${message.guild.id}' AND level=${rlch.uLevel}`).then(grank =>{
      if(!grank){
        return;
      }else{
        let role = message.guild.roles.find('name', grank.roleName);
        if(message.member.roles.has(role.id)) {
          return;
        } else {
          message.member.addRole(role);
        }
      }

    }).catch((err) =>{
      console.log(err);
      client.users.get(config.ownerID).send(`${err}`);
    })
  }).catch((err) =>{
    console.log(err);
    client.users.get(config.ownerID).send(`${err}`);
  })
}

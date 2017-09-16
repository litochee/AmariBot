exports.run = (client, member, sql) =>{
  let guild = member.guild;
  sql.run(`DELETE FROM userScores WHERE guildID=${guild.id} AND userID=${member.user.id}`);
}
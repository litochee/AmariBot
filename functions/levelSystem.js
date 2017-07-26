const jsesc = require('jsesc');
module.exports.scoreSystem = function(message, sql){
  sql.get(`SELECT * FROM userScores WHERE guildID = '${message.guild.id}' AND userID = '${message.author.id}'`).then(row =>{
    if (!row){
      sql.run(`INSERT INTO userScores (guildID, userID, username, globalPoints, nextPL, uLevel, weeklyPoints, globalRank, weeklyRank) VALUES (?,?,?,?,?,?,?,?,?)`, [message.guild.id, message.author.id, message.author.username, 1, 50, 0, 0, 0, 0]);
    } else{
      let curPoints = row.globalPoints + 1;

      if (curPoints > row.nextPL){
        let nPLE = Math.floor(row.nextPL * 1.45);//calculates points for next level
        sql.run(`UPDATE userScores SET globalPoints=${row.globalPoints + 1}, weeklyPoints=${row.weeklyPoints + 1}, uLevel = ${row.uLevel + 1}, nextPL = ${nPLE}, username='${jsesc(message.author.username)}' WHERE userID=${message.author.id} AND guildID=${message.guild.id}`);
        message.reply(`Congrats you have leveled up! **${row.uLevel + 1}**! Congrats!`);
      }//curPoints > row.nextPL
      //checkRank.levelRank(Message, sql); FOR LEVEL/RANK IMPLEMENTS
      sql.run(`UPDATE userScores SET globalPoints = ${row.globalPoints + 1}, weeklyPoints = ${row.weeklyPoints + 1} WHERE userID = ${message.author.id} AND guildID = ${message.guild.id}`);//updates points
      sql.all(`SELECT userID from userScores WHERE guildID = '${message.guild.id}' ORDER BY globalPoints DESC`).then(rColumns =>{
        const setRankUsers = rColumns.map(z => z.userID);
        let i = 0;
        while(setRankUsers[i]){
          sql.run(`UPDATE userScores SET globalRank = ${i + 1} WHERE userID=${setRankUsers[i]} AND guildID=${message.guild.id}`);
          i++
        }//while loop end
      })
    }//else !row
  })//sql
}
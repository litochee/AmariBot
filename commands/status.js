exports.run = (client, message, args, sql) =>{
  //message.channel.send(args.join(" ")); //joins it back together
  sql.get(`SELECT * FROM userScores WHERE guildID = '${message.guild.id}' AND userID = '${message.author.id}'`).then(iUser =>{
    if (iUser.AccessLevel === 4){
      client.user.setGame(args.join(" "));
    }else{
      message.channel.send(`Sorry you don't have access to this command.`);
    }
  }).catch(() =>{
    console.error
  	message.channel.send(`Sorry you don't have access to this command.`);
  	return ;
  });

}

const config = require('./../config.json');
exports.run = (client, message, args, sql) =>{
  //message.channel.send(args.join(" ")); //joins it back together
    if (message.author.id == config.ownerID){
      client.user.setGame(args.join(" "));
    }else{
      message.channel.send(`Sorry you don't have access to this command.`);
    }

}

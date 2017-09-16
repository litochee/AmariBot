const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const sql = require('sqlite');
const config = require('./config.json');
const levelerCore = require('./functions/levelSystem');
const talkedRecently = new Set();

sql.open(`./db/mainDB.sqlite`);

fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split('.')[0];

    client.on(eventName, (...args) => eventFunction.run(client, ...args, sql));
  });
});

client.on("message", message => {
  if (message.author.bot) return; //ignores bots
  //if (message.channel.type !== 'text') return; 
  if (message.channel.type === 'dm'){
    if (!message.content.startsWith(config.prefix)){
      client.users.get(config.ownerID).send(`${message.author.id}, ${message.author.username}: ${message.content}`);
    }else{
      let command = message.content.split(' ')[0];
      command = command.slice(config.prefix.length);
  
      let args = message.content.split(' ').slice(1); //passing through the argument content
  
      try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, sql, Discord);
      } catch (err) {
        console.log(err);
        client.users.get(config.ownerID).send(`${err}`);
        return;
      }
    }
  }else{
    if (!message.content.startsWith(config.prefix)){//checks if the user is NOT typing a command
      sql.all(`SELECT roleName FROM bListRoles WHERE guildID=${message.guild.id}`).then(rCheck=>{
        var blRoles = rCheck.map(g=>g.roleName);
        if(message.member.roles.some(r=>blRoles.includes(r.name)) || message.guild.id == "264445053596991498" || message.guild.id == "110373943822540800") {
          return;
        }else{
          if (talkedRecently.has(message.author.id)) {
            return;
          }else{
            levelerCore.scoreSystem(client, message, sql, Discord);
            talkedRecently.add(message.author.id);
            setTimeout(() => {
              // Removes the user from the set after 2.5 seconds
            talkedRecently.delete(message.author.id);
            }, 4000);
          }
        }
      });
    }else{//user IS typing a command
    //splits input to commands
      let command = message.content.split(' ')[0];
      command = command.slice(config.prefix.length);
  
      let args = message.content.split(' ').slice(1); //passing through the argument content
  
      try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, sql, Discord);
      } catch (err) {
        console.log(err);
        client.users.get(config.ownerID).send(`${err}`);
        return;
      }
    }
  }
});

client.login(config.token);
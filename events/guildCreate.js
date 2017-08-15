const snekfetch = require('snekfetch');
const config = require('./../config.json');
exports.run = (client, member, sql) =>{
  snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', config.dbotAuth)
    .send({"server_count": client.guilds.size})
    .then(() => client.users.get(config.ownerID).send(`Amari has been added to a server.`))
    .catch(err => client.users.get(config.ownerID).send(`${err}`));
}
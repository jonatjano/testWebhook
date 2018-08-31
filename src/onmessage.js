var exports = module.exports = {};
const config = require('./config.js')

exports.onmsg = msg => {
  if (msg.author.bot || msg.content.indexOf(config.prefix) !== 0 ) {
    return
  }

  msg.content = msg.content.substring(1)
  console.log(msg.content)

  if (msg.content.indexOf("embed") === 0) {

    let color = parseInt( msg.content.substring(5, msg.content.indexOf(" ")) , 16) || 0
    let desc = msg.content.replace(/embed[0-9a-fA-F]*/, "")


    msg.channel.send("", {
      embed: {
        description: desc,
        color: color
      }
    })
    msg.delete()

  }

  if (msg.content.indexOf("say") === 0) {

    msg.channel.send(msg.content.replace("say", ""))
    msg.delete()

  }

  if (msg.content === 'Jonathan') {
    msg.reply('Jonathan est un européen de taille moyenne avec un poids moyen et ayant 20ans');
  }

  if (msg.content === "J'aime les poivrons") {
    msg.reply("https://cdn.glitch.com/eed66ed5-643d-49b1-8bdd-e2324c092676%2Fsteam.jpe?1535658470554");
  }

  if (msg.content === `vidéo`) {
    msg.channel.send("https://www.youtube.com/watch?v=PriRW6zqHGk");
  }

  if (msg.content === `ping`) {
    msg.channel.send('Pong.');
  }

  if (msg.content === `beep`) {
    msg.channel.send("Ta gueule sale con je vais pas faire boop va bien niquer tes parents sale con de tes morts t'a cru j'étais ton esclave ?");
  }

}

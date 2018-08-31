const http = require("http")
const { execFileSync } = require('child_process');

// http://expressjs.com/en/starter/basic-routing.html
const server = http.createServer((req, res) => {
  console.log("received a request")
  req.setEncoding('utf8');
  req.on('data', function (chunk) {
    chunk = JSON.parse(chunk)
    if (chunk.pusher) {
      console.log(chunk)
    }
  });
  res.end();
});

server.listen(process.env.PORT, () => {console.log(`app launched on port ${process.env.PORT}`)});

setInterval(() => {
  console.log("still alive")
}, 280000);


const Discord = require('discord.js');
const client = new Discord.Client();
const onmsg = require('./onmessage.js').onmsg

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', onmsg);

client.login(process.env.DISCORD_TOKEN);

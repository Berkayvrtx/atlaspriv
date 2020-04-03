const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const ms = require("parse-ms");
const express = require('express');
require('./util/eventLoader')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { oneLine, stripIndents } = require("common-tags");


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('guildMemberAdd', member =>{
var msg = member;
   var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "     ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
   if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
    '0': `<a:zerro:695740149115518996>`,
    '1': `<a:bir:695740089715654657>`,
    '2': `<a:ki:695740136922677409>`,
    '3': `<a:ucc:695740138105602189>`,
    '4': `<a:drt:695740139615551580>`,                       
    '5': `<a:bes:695740140177457244>`,
    '6': `<a:aldii:695740141800783885>`,
    '7': `<a:yedii:695740143830827130>`,
    '8': `<a:sekkiz:695740148725317632>`,
    '9': `<a:dokuz:695740143314665532> `}[d];
      })
    }
client.channels.get('695734097603199029').send(stripIndents`
<a:seklha:695743488138018946> **Hoş geldin! ${member} seninle birlikte ${üyesayısı} kişiyiz.

<a:seklha:695743488138018946> ✮ tagını ismine alarak ekibimize katılabilirsiniz.**`)
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("messageDelete", async (message, channel) => {
if(message.author.bot || message.channel.type === "dm") return;
  if (message.author.bot) return;
  var user = message.author;
  let sChannelCodeLand = message.guild.channels.find(c => c.name === "mesaj-log")
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Mesaj silindi.`, message.author.avatarURL)
  .addField("Kullanıcı Tag", message.author.tag, true)
  .addField("Kanal Adı", message.channel.name, true)
  .addField("Silinen Mesaj", "```" + message.content + "```")
  .setThumbnail(message.author.avatarURL)
  .setFooter(`Bilgilendirme  • bügün saat ${message.createdAt.getHours()+3}:${message.createdAt.getMinutes()}:${message.createdAt.getSeconds()}`, `${client.user.displayAvatarURL}`)
  sChannelCodeLand.send(embed);
});
client.on("messageUpdate", async (oldMessage, newMessage) => {
if(newMessage.author.bot || newMessage.channel.type === "dm") return;
  let sChannelanan = newMessage.guild.channels.find(c => c.name === "mesaj-log")
  if (oldMessage.content == newMessage.content) return;
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Mesaj Düzenlendi`, newMessage.author.avatarURL)
  .addField("Kullanıcı", newMessage.author)
  .addField("Eski Mesaj", oldMessage.content, true)
  .addField("Yeni Mesaj", newMessage.content, true)
  .addField("Kanal Adı", newMessage.channel.name, true)
  .setThumbnail(newMessage.author.avatarURL)
  .setFooter(`Bilgilendirme  • bügün saat ${newMessage.createdAt.getHours()+3}:${newMessage.createdAt.getMinutes()}`, `${client.user.displayAvatarURL}`)
  sChannelanan.send(embed)
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("userUpdate", async (old,nev) => {
if (old.username === nev.username) return;
let tag = "✮";
let sunucu = "695734097603199026";
let kanal = "695734097603199029";
let rol = "695737494569877695";
if (nev.username.includes(tag)){
if (old.username.includes(tag)) return;
await client.channels.get(kanal).send(new Discord.RichEmbed() .setDescription(`**<@${nev.id}> Görünüşe Göre Tag Almışsın Bu Nedenle <@&${rol}> Rolün Verildi.**`).setColor("BLACK").setFooter("Seni Seviyor Ve Aramızda Görmekten Mutluluk Duyuyoruz..").setTimestamp() .setThumbnail("https://cdn.discordapp.com/attachments/694527721048506439/694536546950316062/Gif_191.gif"))
client.guilds.get(sunucu).members.get(nev.id).addRole(rol).catch(console.error);
} else {
if (!old.username.includes(tag)) return;
await client.channels.get(kanal).send(new Discord.RichEmbed() .setDescription(`**<@${nev.id}> Görünüşe Göre Tagı Bırakmışsın Bu Sebeple <@&${rol}> Rolün Alındı...**`).setColor("BLACK").setFooter("Yetkililer, Lütfen El Atalım Tagı Geri Aldıralım..").setTimestamp() .setThumbnail("https://cdn.discordapp.com/attachments/694527721048506439/694536546950316062/Gif_191.gif"))
client.guilds.get(sunucu).members.get(nev.id).addRole(rol).catch(console.error);
}
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("ready", () => {
const numbers = [
`<a:sifir:694704213774565436>`,
`<a:bir:694703693622149130>`,
`<a:ikii:694703735938482249>`,
`<a:cc:694703760995254457>`,
`<a:dortt:694703783749353492>`,                       
`<a:bess:694703810756476991>`,
`<a:alt:694703833871417375>`,
`<a:yedii:694703878096289872>`,
`<a:sekizz:694703993615548447>`,
`<a:dokuz:694703853454491758> `
];
function numberToEmojis(number) {
let finalString = "";
String(number).split("").forEach(number => {
finalString += "" + numbers[Number(number)];
});
return finalString;
}
let guild = client.guilds.get("695734097603199026");
let onlayn = client.guilds.get("695734097603199026").members.filter(m => m.presence.status !== "offline").size;
setInterval(() => {client.channels.get("695734097603199029").setTopic(` Atlas: ${numberToEmojis(guild.members.size)} Online: ${numberToEmojis(onlayn)}`);
}, 18000)
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("voiceStateUpdate", async(a,b) => {
if (a.voiceChannel == b.voiceChannel) return;
let vlog = a.guild.channels.find(c => c.name === "voice-log")
if (a.voiceChannel && !b.voiceChannel) return vlog.send(new Discord.RichEmbed() .setDescription(`<@${a.id}> ${a.voiceChannel} kanalından çıkış yaptı.`).setColor("BLACK")).catch(console.error);
if (!a.voiceChannel && b.voiceChannel) return vlog.send(new Discord.RichEmbed() .setDescription(`<@${a.id}> ${b.voiceChannel} kanalına giriş yaptı.`).setColor("RED")).catch(console.error);
if (a.voiceChannel !== b.voiceChannel) return vlog.send(new Discord.RichEmbed() .setDescription(`<@${a.id}> ${a.voiceChannel} kanalından ${b.voiceChannel} kanalına giriş yaptı.`).setColor("RANDOM")).catch(console.error);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

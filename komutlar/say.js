const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
  var random = ['Beg us for forgiveness','The wolves are closing, they’re closing, they’re closing in on us','You strangled me like an addiction','We had to fall to lose it all...','One thing I dont know Why?','Things arent the way they were before'];
  var randomla = Math.floor(Math.random() * random.length);

  
  if (!message.member.roles.has("691339901614162071") && !message.member.hasPermission("MANAGE_MESSAGES") ) 
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "695734097603199026";
  client.premium_subscription_count == 0
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
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
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
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
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "✮";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
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
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
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
  //////////////////////////////////////////////////
const emoji1 = client.emojis.get("695743488138018946")
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('✮ Atlas')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
    .setFooter(`${random[randomla]}`)
 
  msg.channel.send(embed1);
  
 /* client.setInterval(() => {
  let channel = client.channels.get("669976891582840893"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`);
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}
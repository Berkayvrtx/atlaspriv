const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
   const yetersiz = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("RANDOM")
  .setDescription("Bu işlemi yapmak için yeterli yetkilere sahip değilsin.")
  if(!message.member.hasPermission("ADMINISTRATOR"))
      if(!message.member.roles.some(r=>["ROL ID"].includes(r.id))) return message.channel.send(yetersiz)
  
    let kanal1 = args[0]
    let kanal2 = args[1]
    let kanal1bul = client.channels.find(c => c.id === kanal1)
    let uyeler = kanal1bul.members
    let kanal2bul = client.channels.find(c => c.id === kanal2)
   const etiketle = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("RANDOM")
  .setDescription("Lütfen taşımak istediğiniz üyelerin kanal IDsini belirtin.")
    
   const belirt = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("RANDOM")
  .setDescription("Lütfen kullanıcıları taşımak istediğiniz kanalın IDsini belirtin.")
    
   const hatalı = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("RANDOM")
  .setDescription("Belirttiğiniz kanal IDsi hatalı.")
   
   const değil = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor("RANDOM")
  .setDescription("Belirttiğiniz kanalda kimse bağlı değil.")
   
   if (!args[0]) return message.channel.send(etiketle).then(msg => { msg.delete(5000), message.delete(5000)});
   if (!args[1]) return message.channel.send(belirt).then(msg => { msg.delete(5000), message.delete(5000)});
   if (!kanal1bul) return message.channel.send(hatalı).then(msg => { msg.delete(5000), message.delete(5000)});
   if (uyeler.size < 1) return message.channel.send(değil).then(msg => { msg.delete(5000), message.delete(5000)});
    
uyeler.forEach(member => {
  member.setVoiceChannel(kanal2bul)
})
  
  let basarılı = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setColor("RANDOM")
  .setDescription(""+uyeler.size+" kişi "+kanal2bul.name+" kanalına başarıyla taşındı.")
  message.channel.send(basarılı)
		
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tası-all', 'all-tası', 'all-taşı', 'taşı-all'],
  permLevel: 0
};
exports.help = {
  name: 'cmove',
  description: 'SS',
  usage: 'SS'
};
   
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = async (bot, message, args) => {
  let rol = message.guild.roles.get('694957419314413668');
  if (!rol) return;
  if (!message.guild) return;
  if (!message.member.roles.has("692531116992757870") && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed() .setDescription(` Bu Komudu Kullanmak İçin Yetkin Yok`).setColor("RANDOM"))
   var random = ['Kitaplarda Yazmayan Bu Aşka Çağre Bulsunlar, Alkol Almadan Neden Döndüm Şimdi Şaşkına?','Kim Benim Düşmanım ? Kim Senin Dostun??','Sanki Siyah-Beyaz Ekrandaki Gök Kuşağı Benim..','Sahne Işıklarının Gidişi, Sokak Lambalarının Sönüşü, Son Bakışım..','Aslında , Çok Doldum.. Karşında Bu Gece Zor Durdum..','Güne Açan Çiçekler Gibiydin, Yalaaağnnn'
,'Ben Ölsem , Ölsem , Ölsem, Öldüm..','Herşeyi Gören Sen Beni Mi Göremedin..?','Sen Diye Kendimi Ben..','Bugün Her Yanımda İzler , Dökülen Saçımda Rüzgar..','Yazıp Yazıp Silme..','Nerenin Havası Bu Güzelim, Hint Kumaşı Mı Kalmış Şu Devirde?'];
  var randomla = Math.floor(Math.random() * random.length);
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if (!member) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir Üye Etiketlemelisin').setColor("Black"));
  if(member.roles.has(rol.id)) {
	  (member.removeRole(rol.id))
	  message.channel.send(new Discord.RichEmbed().setDescription(`${member} üyesinden ${rol} rolü alındı.`).setFooter(`${random[randomla]}`)).then(msg => msg.delete(5000));
  }
 else {
  await(member.addRole(rol.id));
  try{
    await
   message.channel.send(new Discord.RichEmbed().setDescription(`${member} kişisine ${rol} rolü verildi.`) .setFooter(`${random[randomla]}`)).then(msg => msg.delete(5000));
  }catch(e){
	  message.channel.send(new Discord.RichEmbed().setDescription(`${member} kişisine ${rol} rolü verildi.`) .setFooter(`${random[randomla]}`)).then(msg => msg.delete(5000));
  }
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Vip'],
  permLevel: "0"
};

exports.help = {
  name: "ekip",
  description: "müzisyen rolü verir.",
  usage: "vip <mesaj>"
};
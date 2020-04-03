const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = function(client, message, args) {
  const yetersiz = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor("RANDOM")
    .setDescription("Bu işlemi yapmak için yeterli yetkilere sahip değilsin.");
  if (!message.member.hasPermission("ADMINISTRATOR"))
    if (!message.member.roles.some(r => ["ROL ID"].includes(r.id)))
      return message.channel.send(yetersiz);

  let uyeler = message.member.voiceChannel.members;

  const değil = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor("RANDOM")
    .setDescription("Belirttiğiniz kanalda kimse bağlı değil.");

  if (uyeler.size < 1)
    return message.channel.send(değil).then(msg => {
      msg.delete(5000), message.delete(5000);
    });

  uyeler.forEach(member => {
    member.setMute(false);
  });

  let basarılı = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("RANDOM")
    .setDescription(
      "" + uyeler.size + " kişi başarıyla ses mutesi kaldırıldı."
    );
  message.channel.send(basarılı);

  if (args[0] == "aç") {
    uyeler.forEach(member => {
      member.setMute(false);
    });
    let basarılı = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setColor("RANDOM")
      .setDescription("" + uyeler.size + " kişinin susturu başarıyla açıldı.");
    message.channel.send(basarılı);
  }
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["sustur"],
  permLevel: 0
};
exports.help = {
  name: "cunmute",
  description: "SS",
  usage: "SS"
};

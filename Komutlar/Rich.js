const Discord = require("discord.js");

exports.run = async (client, message, args, ayar, emoji) => {
    let boosterrol = "803720232270954557" //boost rolü idsi
    let kanalid = "803334638558904320" //kullana bileceginiz kanal id (misal commands - bot komutlar)
    let renk = "ff66f0" //renk kafaniza göre ayarlayin suanki pembe
    let tag = "" //tag sembolü varsa yazin cünkü isminin basina ekleyek olan sey yoksa bos birakin


    let onay = "<a:ony:810853769428336671>" //onay emojisi id tepki icin örnek <:emojiismi:id>
    let iptal = "<a:no:710518885320884366>" //iptal emojisi id tepki icin <:emojiismi:id>
    if(!message.member.roles.cache.has(boosterrol)) return message.channel.send(`**Bu komutu kullanabilmek için Sunucuya Takviye yapmalısın!** ${iptal}`) 
    if(message.channel.id !== kanalid) return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.tag,  message.author.avatarURL({dynamic: true}))
.setColor(renk)
    .setDescription(`**\`•\` <@${message.author.id}>, bu komutu sadece <#${kanalid}> kanalin da kullanabilirsin.**`)
.setTimestamp()
.setFooter(`© Boss Boost System`, "https://cdn.discordapp.com/emojis/785950806384836619.gif?v=1%22"))

  let boosternick = args.slice(0).join(' ')
  if(!boosternick) return message.reply("Yeni adını girmelisin.").then( a=> a.react(iptal))
  message.member.setNickname(`${tag} ${boosternick}`)
    const Savage = new Discord.MessageEmbed()
    .setAuthor(message.author.tag,  message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    .setColor(renk)
    .setDescription(`**\`•\` Takma adın başarıyla \`${boosternick}\` olarak değiştirildi!**`) // tagi göstermesse embedde ${boosternick}'in basina ${tag} ekleyin yani; ${tag} ${boosternick}
    .setFooter(`© Boss Boost System`, "https://cdn.discordapp.com/emojis/785950806384836619.gif?v=1%22")
    message.channel.send(Savage)
    message.react(onay);
}

exports.conf = {
    name: "zengin",
    aliases: ["booster", "boosternick", "rich", "me"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'zengin', 
    description: 'Boost basanlar isim sag tiksiz degise bilcek.',
    usage: 'rich <isim>',
    kategori: 'kullanıcı'
};

//SAVAGE SIZI COK SEVIYO :3
